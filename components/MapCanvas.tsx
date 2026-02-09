
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MapSettings, MapLayer } from '../types';
import AttributionOverlay from './AttributionOverlay';

interface MapCanvasProps {
  settings: MapSettings;
  sidebarOffset: number;
}

const TILE_SERVERS: Record<MapLayer, { url: string; format: 'xyz' | 'tms' | 'static' }> = {
  CYCLOSM: { url: 'https://a.tile-cyclosm.openstreetmap.fr/cyclosm', format: 'xyz' },
  STANDARD: { url: 'https://tile.openstreetmap.org', format: 'xyz' },
  HOT: { url: 'https://a.tile.openstreetmap.fr/hot', format: 'xyz' },
  OPENTOPOMAP: { url: 'https://a.tile.opentopomap.org', format: 'xyz' },
  CARTODARK: { url: 'https://a.basemaps.cartocdn.com/dark_all', format: 'xyz' },
  CARTOVOYAGER: { url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager', format: 'xyz' },
  BLUE_MARBLE: { url: `${import.meta.env.BASE_URL}blue-marble.jpg`, format: 'static' },
  NASA_VIIRS: { url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default', format: 'xyz' }
};

async function createStaticTexture(url: string): Promise<THREE.Texture> {
  console.log(`Loading static texture from: ${url}`);
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    // Don't use crossOrigin for images that don't support CORS
    // loader.setCrossOrigin('anonymous');

    loader.load(
      url,
      (texture) => {
        console.log('✓ Static texture loaded successfully');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 16;
        resolve(texture);
      },
      (progress) => {
        if (progress.lengthComputable) {
          const percent = (progress.loaded / progress.total * 100).toFixed(0);
          console.log(`Loading texture: ${percent}%`);
        }
      },
      (error) => {
        console.error('✗ Failed to load static texture:', error);
        reject(error);
      }
    );
  });
}

async function createStitchedTexture(urlPattern: (x: number, y: number, z: number) => string, zoom: number): Promise<THREE.CanvasTexture> {
  const tileSize = 256;
  const numTiles = Math.pow(2, zoom);
  console.log(`Creating stitched texture with ${numTiles}x${numTiles} tiles at zoom ${zoom}`);
  const canvas = document.createElement('canvas');
  canvas.width = numTiles * tileSize;
  canvas.height = numTiles * tileSize;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) throw new Error('Could not create canvas context');

  // Fill with a gradient background first
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#1a3a52');
  gradient.addColorStop(1, '#0d1b2a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const tilePromises: Promise<void>[] = [];
  let loadedCount = 0;
  const failedUrls: string[] = [];
  
  for (let x = 0; x < numTiles; x++) {
    for (let y = 0; y < numTiles; y++) {
      const url = urlPattern(x, y, zoom);
      const p = new Promise<void>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        const timeoutId = setTimeout(() => {
          console.warn(`⏱️ Tile request timeout: ${url}`);
          failedUrls.push(url);
          resolve();
        }, 5000);
        
        img.onload = () => {
          clearTimeout(timeoutId);
          loadedCount++;
          ctx.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize);
          console.log(`✓ Loaded tile ${x},${y}`);
          resolve();
        };
        img.onerror = () => {
          clearTimeout(timeoutId);
          failedUrls.push(url);
          console.warn(`✗ Failed to load tile: ${url}`);
          resolve();
        };
        img.src = url;
      });
      tilePromises.push(p);
    }
  }

  await Promise.all(tilePromises);
  console.log(`Texture complete. Loaded ${loadedCount}/${tilePromises.length} tiles`);
  if (failedUrls.length > 0) {
    console.warn(`Failed URLs (${failedUrls.length}): ${failedUrls.slice(0, 2).join(', ')}${failedUrls.length > 2 ? ' ...' : ''}`);
  }
  
  // If no tiles loaded, add some visual feedback
  if (loadedCount === 0) {
    ctx.fillStyle = 'rgba(255, 100, 100, 0.3)';
    ctx.font = 'bold 50px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚠️ TILES FAILED', canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = '20px Arial';
    ctx.fillText('Check console', canvas.width / 2, canvas.height / 2 + 30);
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping; 
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  return texture;
}

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const MapCanvas: React.FC<MapCanvasProps> = ({ settings, sidebarOffset }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const settingsRef = useRef<MapSettings>(settings);
  const sidebarOffsetRef = useRef<number>(sidebarOffset);
  const currentSidebarOffsetRef = useRef<number>(sidebarOffset);
  const lastTimeRef = useRef<number>(0);
  const starsRef = useRef<THREE.Points | null>(null);
  
  const progressRef = useRef({
    torus: 0,
    sphere: 0,
    cylinder: 0,
    cone: 0,
    disc: 0,
    mercator: 0,
    gallPeters: 0,
    sinusoidal: 0,
    robinson: 0,
    infinite: 0,
  });

  const lastModeRef = useRef<string>('SPHERE');
  const [loading, setLoading] = useState(true);
  const atmosphereLayersRef = useRef<THREE.Mesh[]>([]);
  const atmosphereFadeRef = useRef<number>(settings.viewMode === 'SPHERE' ? 1.0 : 0.0);
  const allowMorphRef = useRef<boolean>(true);

  // Create a placeholder texture
  const createPlaceholderTexture = (): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not create canvas context');
    
    // Create a grid pattern with coordinates
    ctx.fillStyle = '#1a3a52';
    ctx.fillRect(0, 0, 512, 512);
    
    // Draw a gradient background
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#0d1b2a');
    gradient.addColorStop(1, '#1a3a52');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Draw grid
    ctx.strokeStyle = '#2a5a7a';
    ctx.lineWidth = 2;
    for (let i = 0; i <= 8; i++) {
      const pos = (i / 8) * 512;
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(512, pos);
      ctx.stroke();
    }
    
    // Draw text
    ctx.fillStyle = '#4a9aca';
    ctx.font = 'bold 24px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Loading Tiles...', 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  };

  useEffect(() => {
    settingsRef.current = settings;
    sidebarOffsetRef.current = sidebarOffset;
    console.log('Settings updated:', settings.viewMode, settings.mapLayer);
  }, [settings, sidebarOffset]);

  useEffect(() => {
    setLoading(true);
    const server = TILE_SERVERS[settings.mapLayer];

    // Handle static texture (like NASA Blue Marble)
    if (server.format === 'static') {
      console.log('Loading static texture for layer:', settings.mapLayer);
      createStaticTexture(server.url).then((newTexture) => {
        console.log('Static texture loaded successfully');
        if (materialRef.current) {
          const oldTexture = materialRef.current.uniforms.uTexture.value;
          if (oldTexture instanceof THREE.Texture && oldTexture.image) oldTexture.dispose();
          materialRef.current.uniforms.uTexture.value = newTexture;
          // Static textures like Blue Marble are equirectangular
          materialRef.current.uniforms.uUseEquirectangular.value = 1.0;
        }
        setLoading(false);
      }).catch((error) => {
        console.error('Failed to load static texture:', error);
        setLoading(false);
      });
      return;
    }

    // Handle tiled textures
    const mapUrlPattern = (x: number, y: number, z: number) => {
      // NASA GIBS uses a special format with date
      if (settings.mapLayer === 'NASA_VIIRS') {
        // Get today's date in YYYY-MM-DD format (use yesterday to ensure data availability)
        const date = new Date();
        date.setDate(date.getDate() - 1); // Use yesterday's data to ensure availability
        const dateStr = date.toISOString().split('T')[0];
        return `${server.url}/${dateStr}/GoogleMapsCompatible_Level9/${z}/${y}/${x}.jpg`;
      }

      // Standard tile format z/x/y
      const url = `${server.url}/${z}/${x}/${y}.png`;
      return url;
    };

    console.log('Starting texture load for layer:', settings.mapLayer);
    console.log('Sample URL:', mapUrlPattern(0, 0, 4));
    createStitchedTexture(mapUrlPattern, 4).then((newTexture) => {
      console.log('Texture loaded successfully');
      if (materialRef.current) {
        const oldTexture = materialRef.current.uniforms.uTexture.value;
        if (oldTexture instanceof THREE.Texture && oldTexture.image) oldTexture.dispose();
        materialRef.current.uniforms.uTexture.value = newTexture;
        // Tiled textures are in Web Mercator projection
        materialRef.current.uniforms.uUseEquirectangular.value = 0.0;
      }
      setLoading(false);
    }).catch((error) => {
      console.error('Failed to load texture:', error);
      setLoading(false);
    });
  }, [settings.mapLayer]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Prevent duplicate scene creation in Strict Mode
    if (rendererRef.current) {
      console.log('Scene already exists, skipping recreation');
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000005);
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 0, 250); 
    console.log('Scene created with camera position:', camera.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    console.log('Renderer created and appended to DOM');
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = false;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.enableRotate = true;

    // Debug mouse events
    renderer.domElement.addEventListener('mousedown', (e) => {
      console.log('🖱️ Mouse down at:', e.clientX, e.clientY);
    });
    renderer.domElement.addEventListener('mousemove', (e) => {
      if (e.buttons > 0) console.log('🖱️ Mouse dragging at:', e.clientX, e.clientY);
    });
    renderer.domElement.addEventListener('mouseup', (e) => {
      console.log('🖱️ Mouse up at:', e.clientX, e.clientY);
    });

    const vertexShader = `
      varying vec2 vUv;
      varying vec2 vFinalUv;
      
      uniform float uTorusT; 
      uniform float uSphereT;
      uniform float uCylinderT;
      uniform float uConeT;
      uniform float uDiscT;
      uniform float uMercatorT;
      uniform float uGallPetersT;
      uniform float uSinusoidalT;
      uniform float uRobinsonT;
      uniform float uInfiniteT;
      
      #define PI 3.14159265359

      float ease(float t) {
        return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
      }

      // Robinson projection lookup tables
      const float robX[19] = float[19](1.0, 0.9986, 0.9954, 0.99, 0.9822, 0.973, 0.963, 0.951, 0.9394, 0.9264, 0.911, 0.8935, 0.8735, 0.85, 0.8235, 0.793, 0.758, 0.7185, 0.5322);
      const float robY[19] = float[19](0.0, 0.062, 0.124, 0.186, 0.248, 0.31, 0.372, 0.434, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0);

      vec2 getRobinsonParams(float latDeg) {
        float aLat = abs(latDeg);
        float indexF = aLat / 5.0;
        int i = int(floor(indexF));
        i = clamp(i, 0, 17);
        float t = fract(indexF);
        
        float x = mix(robX[i], robX[i+1], t);
        float y = mix(robY[i], robY[i+1], t);
        
        if (latDeg < 0.0) y = -y;
        return vec2(x, y);
      }

      void main() {
        vUv = uv;
        
        // --- TEXTURE MAPPING LOGIC ---
        float phiTrans = (uv.y - 0.5) * 2.0 * PI; 
        float thetaTrans = (uv.x - 0.5) * PI;
        vec3 pTransUV = vec3(sin(thetaTrans), cos(thetaTrans) * sin(phiTrans), cos(thetaTrans) * cos(phiTrans));
        float eLatT = asin(clamp(pTransUV.y, -1.0, 1.0));
        float eLonT = atan(pTransUV.x, pTransUV.z);
        vec2 uvInfinite = vec2((eLonT / (2.0 * PI)) + 0.5, (eLatT / PI) + 0.5);

        float mercY = (uv.y - 0.5) * 2.0 * PI; 
        float mLat = 2.0 * atan(exp(mercY)) - PI / 2.0;
        vec2 uvMercator = vec2(uv.x, (mLat / PI) + 0.5);
        
        float sinLatGP = (uv.y - 0.5) * 2.0;
        float gpLat = asin(clamp(sinLatGP, -1.0, 1.0));
        vec2 uvGallPeters = vec2(uv.x, (gpLat / PI) + 0.5);
        
        vec2 uvBase = uv;
        uvBase = mix(uvBase, uvInfinite, uInfiniteT);
        uvBase = mix(uvBase, uvMercator, uMercatorT);
        uvBase = mix(uvBase, uvGallPeters, uGallPetersT);
        vFinalUv = uvBase;

        // --- GEOMETRY PARAMETERS ---
        float sphereRadius = 10.0;
        float planeW = 2.0 * PI * sphereRadius; 
        
        // Height targets to fix squishing
        float hPC = PI * sphereRadius;           // Plate Carree 2:1
        float hM = planeW;                       // Mercator Square (clipped)
        float hGP = 2.0 * sphereRadius;          // Gall-Peters 3.14:1
        float hInf = planeW;                     // Infinite
        float hRob = planeW / 1.97;              // Robinson standard

        float targetHeight = hPC;
        targetHeight = mix(targetHeight, hM, uMercatorT);
        targetHeight = mix(targetHeight, hGP, uGallPetersT);
        targetHeight = mix(targetHeight, hInf, uInfiniteT);
        targetHeight = mix(targetHeight, hRob, uRobinsonT);

        float stdLat = (uv.y - 0.5) * PI;
        float geoWidthFactor = mix(1.0, cos(stdLat), uSinusoidalT);
        
        // 2D BASE POSITION
        vec3 pos2DDefault = vec3((uv.x - 0.5) * planeW * geoWidthFactor, (uv.y - 0.5) * targetHeight, 0.0);

        // Robinson 2D
        vec2 robParams = getRobinsonParams((uv.y - 0.5) * 180.0);
        float robXFactor = 0.8487 * robParams.x;
        float robYVal = 1.3523 * robParams.y * sphereRadius;
        vec3 posRobinson = vec3((uv.x - 0.5) * planeW * robXFactor, robYVal, 0.0);

        vec3 pos2D = mix(pos2DDefault, posRobinson, uRobinsonT);
        
        // 3D CANDIDATES
        float lon = (uv.x - 0.5) * 2.0 * PI;
        vec3 posCylinder = vec3(sphereRadius * sin(lon), (uv.y - 0.5) * targetHeight, sphereRadius * cos(lon));
        float coneRadius = sphereRadius * (1.1 - uv.y); 
        vec3 posCone = vec3(coneRadius * sin(lon), (uv.y - 0.5) * targetHeight, coneRadius * cos(lon));
        float discRadius = sphereRadius * 2.0 * (1.0 - uv.y); 
        vec3 posDisc = vec3(discRadius * sin(lon), 0.0, discRadius * cos(lon));

        float stdLon = (uv.x - 0.5) * 2.0 * PI;
        vec3 pSph = vec3(cos(stdLat) * sin(stdLon), sin(stdLat), cos(stdLat) * cos(stdLon));
        vec3 pSphTrans = vec3(sin(thetaTrans), cos(thetaTrans) * sin(phiTrans), cos(thetaTrans) * cos(phiTrans));
        vec3 posSphere = mix(pSph, pSphTrans, uInfiniteT) * sphereRadius;

        // Torus
        vec3 pos2D_Rect = vec3((uv.x - 0.5) * planeW, (uv.y - 0.5) * targetHeight, 0.0);
        float r_tube = targetHeight / (2.0 * PI);
        float R_hole = 25.0; 
        float tRoll = ease(clamp(uTorusT * 2.0, 0.0, 1.0));
        float rollAngle = (uv.y - 0.5) * 2.0 * PI;
        vec3 pRolled = vec3(pos2D_Rect.x, mix(pos2D_Rect.y, r_tube * sin(rollAngle), tRoll), mix(pos2D_Rect.z, r_tube * (cos(rollAngle) - 1.0), tRoll));
        float tWrap = ease(clamp(uTorusT * 2.0 - 1.0, 0.0, 1.0));
        float targetRingWidth = 2.0 * PI * R_hole;
        float xStretched = mix(pRolled.x, (uv.x - 0.5) * targetRingWidth, tWrap);
        float wrapAngle = xStretched / R_hole;
        float distFromRingCenter = R_hole + pRolled.z;
        vec3 pToroid = vec3(distFromRingCenter * sin(wrapAngle), pRolled.y, distFromRingCenter * cos(wrapAngle) - R_hole);
        vec3 posTorusFinal = mix(pRolled, pToroid, tWrap);

        float wSphere = uSphereT;
        float wCylinder = uCylinderT;
        float wCone = uConeT;
        float wDisc = uDiscT;
        float wTorus = uTorusT;
        
        float total3DWeight = wSphere + wCylinder + wCone + wDisc + wTorus;
        vec3 pos3DCombined = vec3(0.0);
        if (total3DWeight > 0.0) {
          pos3DCombined = (posSphere * wSphere + posCylinder * wCylinder + posCone * wCone + posDisc * wDisc + posTorusFinal * wTorus) / total3DWeight;
        }

        float global3DT = clamp(total3DWeight, 0.0, 1.0);
        vec3 finalPos = mix(pos2D, pos3DCombined, global3DT);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      varying vec2 vFinalUv;
      uniform sampler2D uTexture;
      uniform float uShowGrid;
      uniform float uUseEquirectangular;

      #define PI 3.14159265359

      float latToMercator(float lat) {
        float latLimit = 0.005;
        float clampedLat = clamp(lat, latLimit, 1.0 - latLimit);
        float latRad = (clampedLat - 0.5) * PI;
        return (log(tan(PI / 4.0 + latRad / 2.0)) / PI + 1.0) / 2.0;
      }

      void main() {
        // Apply Mercator transformation only for tiled sources (Web Mercator projection)
        // Skip for equirectangular sources like Blue Marble
        vec2 texCoords = vFinalUv;
        if (uUseEquirectangular < 0.5) {
          // Tiled sources need Mercator adjustment
          texCoords.y = latToMercator(vFinalUv.y);
        }

        vec4 texColor = texture2D(uTexture, texCoords);

        float grid = 0.0;
        if (uShowGrid > 0.5) {
          vec2 gridSpacing = vec2(18.0, 10.0);
          vec2 gridUv = fract(vFinalUv * gridSpacing);
          float line = step(0.98, gridUv.x) + step(0.98, gridUv.y);
          grid = clamp(line * 0.08, 0.0, 0.5);
        }

        gl_FragColor = vec4(texColor.rgb + grid, texColor.a);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        uTorusT: { value: 0.0 },
        uSphereT: { value: 0.0 },
        uCylinderT: { value: 0.0 },
        uConeT: { value: 0.0 },
        uDiscT: { value: 0.0 },
        uMercatorT: { value: 0.0 },
        uGallPetersT: { value: 0.0 },
        uSinusoidalT: { value: 0.0 },
        uRobinsonT: { value: 0.0 },
        uInfiniteT: { value: 0.0 },
        uTexture: { value: createPlaceholderTexture() },
        uShowGrid: { value: settingsRef.current.showGrid ? 1.0 : 0.0 },
        uUseEquirectangular: { value: 0.0 }
      },
      side: THREE.DoubleSide
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(1, 1, 400, 400);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(5, 5, 5);
    scene.add(mesh);
    console.log('✓ Plane mesh added to scene with', geometry.attributes.position.count, 'vertices');
    console.log('✓ Initial mode:', settingsRef.current.viewMode);
    console.log('✓ Initial map layer:', settingsRef.current.mapLayer);

    // Create atmosphere shader that follows the same geometry transformations
    const atmosphereVertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;

      uniform float uTorusT;
      uniform float uSphereT;
      uniform float uCylinderT;
      uniform float uConeT;
      uniform float uDiscT;
      uniform float uMercatorT;
      uniform float uGallPetersT;
      uniform float uSinusoidalT;
      uniform float uRobinsonT;
      uniform float uInfiniteT;

      #define PI 3.14159265359

      float ease(float t) {
        return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
      }

      const float robX[19] = float[19](1.0, 0.9986, 0.9954, 0.99, 0.9822, 0.973, 0.963, 0.951, 0.9394, 0.9264, 0.911, 0.8935, 0.8735, 0.85, 0.8235, 0.793, 0.758, 0.7185, 0.5322);
      const float robY[19] = float[19](0.0, 0.062, 0.124, 0.186, 0.248, 0.31, 0.372, 0.434, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0);

      vec2 getRobinsonParams(float latDeg) {
        float aLat = abs(latDeg);
        float indexF = aLat / 5.0;
        int i = int(floor(indexF));
        i = clamp(i, 0, 17);
        float t = fract(indexF);
        float x = mix(robX[i], robX[i+1], t);
        float y = mix(robY[i], robY[i+1], t);
        if (latDeg < 0.0) y = -y;
        return vec2(x, y);
      }

      void main() {
        vUv = uv;

        float sphereRadius = 10.0;
        float planeW = 2.0 * PI * sphereRadius;
        float hPC = PI * sphereRadius;
        float hM = planeW;
        float hGP = 2.0 * sphereRadius;
        float hInf = planeW;
        float hRob = planeW / 1.97;

        float targetHeight = hPC;
        targetHeight = mix(targetHeight, hM, uMercatorT);
        targetHeight = mix(targetHeight, hGP, uGallPetersT);
        targetHeight = mix(targetHeight, hInf, uInfiniteT);
        targetHeight = mix(targetHeight, hRob, uRobinsonT);

        float stdLat = (uv.y - 0.5) * PI;
        float geoWidthFactor = mix(1.0, cos(stdLat), uSinusoidalT);

        vec3 pos2DDefault = vec3((uv.x - 0.5) * planeW * geoWidthFactor, (uv.y - 0.5) * targetHeight, 0.0);

        vec2 robParams = getRobinsonParams((uv.y - 0.5) * 180.0);
        float robXFactor = 0.8487 * robParams.x;
        float robYVal = 1.3523 * robParams.y * sphereRadius;
        vec3 posRobinson = vec3((uv.x - 0.5) * planeW * robXFactor, robYVal, 0.0);
        vec3 pos2D = mix(pos2DDefault, posRobinson, uRobinsonT);

        float lon = (uv.x - 0.5) * 2.0 * PI;
        vec3 posCylinder = vec3(sphereRadius * sin(lon), (uv.y - 0.5) * targetHeight, sphereRadius * cos(lon));
        float coneRadius = sphereRadius * (1.1 - uv.y);
        vec3 posCone = vec3(coneRadius * sin(lon), (uv.y - 0.5) * targetHeight, coneRadius * cos(lon));
        float discRadius = sphereRadius * 2.0 * (1.0 - uv.y);
        vec3 posDisc = vec3(discRadius * sin(lon), 0.0, discRadius * cos(lon));

        float stdLon = (uv.x - 0.5) * 2.0 * PI;
        float phiTrans = (uv.y - 0.5) * 2.0 * PI;
        float thetaTrans = (uv.x - 0.5) * PI;
        vec3 pSph = vec3(cos(stdLat) * sin(stdLon), sin(stdLat), cos(stdLat) * cos(stdLon));
        vec3 pSphTrans = vec3(sin(thetaTrans), cos(thetaTrans) * sin(phiTrans), cos(thetaTrans) * cos(phiTrans));
        vec3 posSphere = mix(pSph, pSphTrans, uInfiniteT) * sphereRadius;

        vec3 pos2D_Rect = vec3((uv.x - 0.5) * planeW, (uv.y - 0.5) * targetHeight, 0.0);
        float r_tube = targetHeight / (2.0 * PI);
        float R_hole = 25.0;
        float tRoll = ease(clamp(uTorusT * 2.0, 0.0, 1.0));
        float rollAngle = (uv.y - 0.5) * 2.0 * PI;
        vec3 pRolled = vec3(pos2D_Rect.x, mix(pos2D_Rect.y, r_tube * sin(rollAngle), tRoll), mix(pos2D_Rect.z, r_tube * (cos(rollAngle) - 1.0), tRoll));
        float tWrap = ease(clamp(uTorusT * 2.0 - 1.0, 0.0, 1.0));
        float targetRingWidth = 2.0 * PI * R_hole;
        float xStretched = mix(pRolled.x, (uv.x - 0.5) * targetRingWidth, tWrap);
        float wrapAngle = xStretched / R_hole;
        float distFromRingCenter = R_hole + pRolled.z;
        vec3 pToroid = vec3(distFromRingCenter * sin(wrapAngle), pRolled.y, distFromRingCenter * cos(wrapAngle) - R_hole);
        vec3 posTorusFinal = mix(pRolled, pToroid, tWrap);

        float wSphere = uSphereT;
        float wCylinder = uCylinderT;
        float wCone = uConeT;
        float wDisc = uDiscT;
        float wTorus = uTorusT;

        float total3DWeight = wSphere + wCylinder + wCone + wDisc + wTorus;
        vec3 pos3DCombined = vec3(0.0);
        if (total3DWeight > 0.0) {
          pos3DCombined = (posSphere * wSphere + posCylinder * wCylinder + posCone * wCone + posDisc * wDisc + posTorusFinal * wTorus) / total3DWeight;
        }

        float global3DT = clamp(total3DWeight, 0.0, 1.0);
        vec3 finalPos = mix(pos2D, pos3DCombined, global3DT);

        // Scale outward slightly more to ensure coverage and close seams
        float edgeExtension = 1.06;
        finalPos *= edgeExtension;

        // Calculate proper normals for 3D shapes
        vec3 normalSphere = normalize(posSphere);
        vec3 normalCylinder = normalize(vec3(posCylinder.x, 0.0, posCylinder.z));
        vec3 normalCone = normalize(vec3(posCone.x, 0.0, posCone.z));
        vec3 normalDisc = vec3(0.0, 1.0, 0.0);

        // Torus normal (pointing away from tube center)
        vec3 torusCenter = vec3(distFromRingCenter * sin(wrapAngle), pRolled.y, distFromRingCenter * cos(wrapAngle) - R_hole);
        vec3 tubeCenter = vec3((R_hole + pRolled.z) * sin(wrapAngle), 0.0, (R_hole + pRolled.z) * cos(wrapAngle) - R_hole);
        vec3 normalTorus = normalize(torusCenter - tubeCenter);

        vec3 normal3DCombined = vec3(0.0);
        if (total3DWeight > 0.0) {
          normal3DCombined = normalize(normalSphere * wSphere + normalCylinder * wCylinder + normalCone * wCone + normalDisc * wDisc + normalTorus * wTorus);
        }

        vec3 flatNormal = vec3(0.0, 0.0, 1.0);
        vec3 finalNormal = mix(flatNormal, normal3DCombined, global3DT);

        vNormal = normalize(normalMatrix * finalNormal);
        vPosition = (modelViewMatrix * vec4(finalPos, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
      }
    `;

    const atmosphereFragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;

      uniform float uLayerIntensity;

      void main() {
        // Fresnel effect
        vec3 viewDirection = normalize(vPosition);
        float fresnel = abs(dot(vNormal, viewDirection));
        fresnel = 1.0 - fresnel;

        // Enhanced glow with smooth falloff
        float fresnel1 = pow(fresnel, 2.5);
        float fresnel2 = pow(fresnel, 6.0);

        // Realistic atmosphere colors
        vec3 innerColor = vec3(0.6, 0.8, 1.0);
        vec3 outerColor = vec3(0.3, 0.5, 0.9);

        vec3 color = mix(outerColor, innerColor, fresnel2) * (fresnel1 * 1.5 + fresnel2 * 0.5);
        float alpha = (fresnel1 * 0.4 + fresnel2 * 0.6) * uLayerIntensity;

        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Create single sphere atmosphere that fades for all 3D projections
    const atmosphereLayers: THREE.Mesh[] = [];
    const sphereRadius = 10.0 * 5.0;

    const sphereAtmoMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: atmosphereFragmentShader,
      uniforms: { uLayerIntensity: { value: settingsRef.current.viewMode === 'SPHERE' && settingsRef.current.showAtmosphere ? 0.5 : 0.0 } },
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true
    });
    const sphereAtmoGeometry = new THREE.SphereGeometry(sphereRadius * 1.05, 64, 64);
    const sphereAtmoMesh = new THREE.Mesh(sphereAtmoGeometry, sphereAtmoMaterial);
    sphereAtmoMesh.visible = settingsRef.current.viewMode === 'SPHERE';
    scene.add(sphereAtmoMesh);
    atmosphereLayers.push(sphereAtmoMesh);

    atmosphereLayersRef.current = atmosphereLayers;
    console.log('✓ Sphere atmosphere added');

    const starCount = 12000;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        const radius = 600 + Math.random() * 800;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMesh = new THREE.Points(starGeometry, new THREE.PointsMaterial({ size: 0.7, color: 0x88aaff, transparent: true, opacity: 0.8 }));
    scene.add(starMesh);
    starsRef.current = starMesh;

    const animate = (time: number) => {
      const deltaTime = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const lerpSpeed = 5.0;
      currentSidebarOffsetRef.current += (sidebarOffsetRef.current - currentSidebarOffsetRef.current) * Math.min(deltaTime * lerpSpeed, 1.0);
      camera.setViewOffset(window.innerWidth, window.innerHeight, (currentSidebarOffsetRef.current / 2.0), 0, window.innerWidth, window.innerHeight);

      if (starsRef.current) starsRef.current.rotation.y += 0.00005;

      if (materialRef.current) {
        const mode = settingsRef.current.viewMode;
        if (mode !== lastModeRef.current) {
          console.log('✓ Geometry mode changed:', lastModeRef.current, '→', mode);
          // If we're leaving sphere, need to fade out atmosphere first
          if (lastModeRef.current === 'SPHERE') {
            allowMorphRef.current = false;
          } else {
            allowMorphRef.current = true;
          }
          lastModeRef.current = mode;
        }

        const targets = {
          torus: mode === 'TORUS' ? 1.0 : 0.0,
          sphere: mode === 'SPHERE' ? 1.0 : 0.0,
          cylinder: mode === 'CYLINDER' ? 1.0 : 0.0,
          cone: mode === 'CONE' ? 1.0 : 0.0,
          disc: mode === 'DISC' ? 1.0 : 0.0,
          mercator: mode === 'MERCATOR' ? 1.0 : 0.0,
          gallPeters: mode === 'GALL_PETERS' ? 1.0 : 0.0,
          sinusoidal: mode === 'SINUSOIDAL' ? 1.0 : 0.0,
          robinson: mode === 'ROBINSON' ? 1.0 : 0.0,
          infinite: (mode === 'INFINITE' || mode === 'TORUS') ? 1.0 : 0.0,
        };

        // Update atmosphere fade
        const isSphere = mode === 'SPHERE';
        const targetAtmoFade = (isSphere && settingsRef.current.showAtmosphere) ? 1.0 : 0.0;

        // Only fade in atmosphere after sphere is fully formed
        if (isSphere && progressRef.current.sphere < 0.99) {
          atmosphereFadeRef.current = Math.max(0, atmosphereFadeRef.current - deltaTime * 8.0);
        } else {
          // Fade out faster (8.0) when leaving sphere, fade in slower (3.0) when entering
          const fadeSpeed = targetAtmoFade < atmosphereFadeRef.current ? 8.0 : 3.0;
          atmosphereFadeRef.current += (targetAtmoFade - atmosphereFadeRef.current) * deltaTime * fadeSpeed;
        }

        // Allow morphing once atmosphere has faded out
        if (!allowMorphRef.current && atmosphereFadeRef.current < 0.01) {
          allowMorphRef.current = true;
        }

        (Object.keys(targets) as Array<keyof typeof targets>).forEach(key => {
          let target = targets[key];
          if (key === 'torus' && target === 1.0 && progressRef.current.infinite < 0.9) target = 0.0;

          const current = (progressRef.current as any)[key];
          const s = (key === 'torus') ? 0.5 : 1.5;

          // Only morph if allowed (atmosphere has faded)
          if (allowMorphRef.current) {
            if (current < target) (progressRef.current as any)[key] = Math.min(target, current + deltaTime * s);
            else if (current > target) (progressRef.current as any)[key] = Math.max(target, current - deltaTime * 1.5);
          }
        });

        const torusT = easeInOutCubic(progressRef.current.torus);
        // Torus center hole is at z = -25 (based on R_hole = 25 in shader)
        controls.target.set(0, 0, -25 * torusT);

        const m = materialRef.current;
        m.uniforms.uInfiniteT.value = easeInOutCubic(progressRef.current.infinite);
        m.uniforms.uMercatorT.value = easeInOutCubic(progressRef.current.mercator);
        m.uniforms.uGallPetersT.value = easeInOutCubic(progressRef.current.gallPeters);
        m.uniforms.uSinusoidalT.value = easeInOutCubic(progressRef.current.sinusoidal);
        m.uniforms.uRobinsonT.value = easeInOutCubic(progressRef.current.robinson);
        m.uniforms.uSphereT.value = easeInOutCubic(progressRef.current.sphere);
        m.uniforms.uCylinderT.value = easeInOutCubic(progressRef.current.cylinder);
        m.uniforms.uConeT.value = easeInOutCubic(progressRef.current.cone);
        m.uniforms.uDiscT.value = easeInOutCubic(progressRef.current.disc);
        m.uniforms.uTorusT.value = progressRef.current.torus;
        m.uniforms.uShowGrid.value = settingsRef.current.showGrid ? 1.0 : 0.0;

        // Update atmosphere visibility (sphere only, more subtle)
        atmosphereLayersRef.current.forEach((layer) => {
          if (layer.material instanceof THREE.ShaderMaterial) {
            layer.material.uniforms.uLayerIntensity.value = atmosphereFadeRef.current * 0.5;
            layer.visible = atmosphereFadeRef.current > 0.01;
          }
        });
      }

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    lastTimeRef.current = performance.now();
    requestAnimationFrame(animate);
    console.log('✓ Animation loop started');
    
    const handleResize = () => { 
      camera.aspect = window.innerWidth / window.innerHeight; 
      camera.updateProjectionMatrix(); 
      renderer.setSize(window.innerWidth, window.innerHeight); 
    };
    window.addEventListener('resize', handleResize);

    return () => { 
      window.removeEventListener('resize', handleResize); 
      renderer.dispose(); 
      geometry.dispose(); 
      material.dispose(); 
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#000005] cursor-move" style={{ touchAction: 'none' }}>
        {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md z-10 pointer-events-none">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Initializing Playground...</p>
                </div>
            </div>
        )}
        <AttributionOverlay mapLayer={settings.mapLayer} sidebarOffset={sidebarOffset} />
    </div>
  );
};

export default MapCanvas;
