
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MapSettings, MapLayer, OverlayLayer } from '../types';
import AttributionOverlay from './AttributionOverlay';

interface MapCanvasProps {
  settings: MapSettings;
  sidebarOffset: number;
  resetOrbitTrigger: number;
}

const TILE_SERVERS: Record<MapLayer, { url: string; format: 'xyz' | 'tms' | 'static' }> = {
  STANDARD: { url: 'https://tile.openstreetmap.org', format: 'xyz' },
  HOT: { url: 'https://a.tile.openstreetmap.fr/hot', format: 'xyz' },
  OPENTOPOMAP: { url: 'https://a.tile.opentopomap.org', format: 'xyz' },
  CARTODARK: { url: 'https://a.basemaps.cartocdn.com/dark_all', format: 'xyz' },
  CARTOVOYAGER: { url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager', format: 'xyz' },
  BLUE_MARBLE: { url: `${import.meta.env.BASE_URL}blue-marble.jpg`, format: 'static' },
  NASA_VIIRS: { url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default', format: 'xyz' }
};

const OVERLAY_SERVERS: Record<Exclude<OverlayLayer, 'NONE'>, { url: string; format: 'xyz' }> = {
  HIKING_TRAILS: { url: 'https://tile.waymarkedtrails.org/hiking', format: 'xyz' },
  CYCLING_ROUTES: { url: 'https://tile.waymarkedtrails.org/cycling', format: 'xyz' },
  MTB_TRAILS: { url: 'https://tile.waymarkedtrails.org/mtb', format: 'xyz' },
  OPEN_RAILWAY_MAP: { url: 'https://tiles.openrailwaymap.org/standard', format: 'xyz' },
  PLACE_LABELS: { url: 'https://a.basemaps.cartocdn.com/dark_only_labels', format: 'xyz' }
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

async function createStitchedTexture(urlPattern: (x: number, y: number, z: number) => string, zoom: number, isOverlay: boolean = false): Promise<THREE.CanvasTexture> {
  const tileSize = 256;
  const numTiles = Math.pow(2, zoom);
  console.log(`Creating stitched texture with ${numTiles}x${numTiles} tiles at zoom ${zoom}, overlay: ${isOverlay}`);
  const canvas = document.createElement('canvas');
  canvas.width = numTiles * tileSize;
  canvas.height = numTiles * tileSize;
  const ctx = canvas.getContext('2d', { alpha: true });

  if (!ctx) throw new Error('Could not create canvas context');

  if (isOverlay) {
    // For overlays, start with fully transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    // Fill with a gradient background for base maps
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a3a52');
    gradient.addColorStop(1, '#0d1b2a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

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

  // If no tiles loaded for base map, add some visual feedback
  if (!isOverlay && loadedCount === 0) {
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
  // CanvasTexture is always RGBA format, don't override it
  texture.needsUpdate = true;
  return texture;
}

const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const MapCanvas: React.FC<MapCanvasProps> = ({ settings, sidebarOffset, resetOrbitTrigger }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const settingsRef = useRef<MapSettings>(settings);
  const sidebarOffsetRef = useRef<number>(sidebarOffset);
  const currentSidebarOffsetRef = useRef<number>(sidebarOffset);
  const lastTimeRef = useRef<number>(0);
  const starsRef = useRef<THREE.Points | null>(null);
  const sunRef = useRef<THREE.Mesh | null>(null);
  const orbitResetTargetRef = useRef<THREE.Vector3 | null>(null);
  
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
  const dayNightFadeRef = useRef<number>(settings.showDayNight ? 1.0 : 0.0);
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
    console.log('Settings updated:', settings.viewMode, 'showDayNight:', settings.showDayNight);
  }, [settings, sidebarOffset]);

  // Reset orbit when trigger changes (keeps zoom/pan, only resets viewing angle)
  useEffect(() => {
    if (resetOrbitTrigger > 0 && controlsRef.current) {
      const camera = controlsRef.current.object as THREE.PerspectiveCamera;
      const target = controlsRef.current.target.clone();
      // Keep the current distance (zoom) from the target
      const currentDistance = camera.position.distanceTo(target);
      // Set target position for smooth animation (along +Z axis from target)
      orbitResetTargetRef.current = new THREE.Vector3(target.x, target.y, target.z + currentDistance);
      console.log('Smooth orbit reset initiated');
    }
  }, [resetOrbitTrigger]);

  // Toggle stars visibility
  useEffect(() => {
    if (starsRef.current) {
      starsRef.current.visible = settings.showStars;
    }
  }, [settings.showStars]);

  // Day/night fade is handled in the animate loop via dayNightFadeRef
  // This effect just tracks the setting change
  useEffect(() => {
    // Fade animation handled in animate loop
  }, [settings.showDayNight]);

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
      // NASA GIBS layers use a special format with date
      if (settings.mapLayer === 'NASA_VIIRS') {
        // Get yesterday's date in YYYY-MM-DD format (use yesterday to ensure data availability)
        const date = new Date();
        date.setDate(date.getDate() - 1);
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
    const overlayLayer = settings.overlayLayer;

    if (overlayLayer === 'NONE') {
      // Disable overlay
      if (materialRef.current) {
        materialRef.current.uniforms.uOverlayVisible.value = 0.0;
      }
      console.log('Overlay disabled');
      return;
    }

    // Load overlay texture
    const overlayServer = OVERLAY_SERVERS[overlayLayer];
    const overlayUrlPattern = (x: number, y: number, z: number) => {
      return `${overlayServer.url}/${z}/${x}/${y}.png`;
    };

    console.log('Loading overlay texture for layer:', overlayLayer);
    console.log('Sample overlay URL:', overlayUrlPattern(0, 0, 5));

    // Use zoom 5 for overlays to make features more visible (32x32 tiles)
    createStitchedTexture(overlayUrlPattern, 5, true).then((newOverlayTexture) => {
      console.log('Overlay texture loaded successfully');
      if (materialRef.current) {
        const oldTexture = materialRef.current.uniforms.uOverlayTexture.value;
        if (oldTexture instanceof THREE.Texture && oldTexture.image) oldTexture.dispose();
        materialRef.current.uniforms.uOverlayTexture.value = newOverlayTexture;
        materialRef.current.uniforms.uOverlayVisible.value = 1.0;
      }
    }).catch((error) => {
      console.error('Failed to load overlay texture:', error);
      if (materialRef.current) {
        materialRef.current.uniforms.uOverlayVisible.value = 0.0;
      }
    });
  }, [settings.overlayLayer]);

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
    controls.autoRotateSpeed = 1.0;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.enableRotate = true;
    controls.minDistance = 5; // Will be dynamically updated based on shape
    controlsRef.current = controls;

    // Cancel orbit reset animation when user starts interacting
    controls.addEventListener('start', () => {
      orbitResetTargetRef.current = null;
    });

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
      uniform sampler2D uOverlayTexture;
      uniform float uOverlayVisible;
      uniform float uShowGrid;
      uniform float uUseEquirectangular;
      uniform float uShowDayNight;
      uniform float uIs3D;
      uniform vec3 uSunDirection;
      uniform vec3 uCameraPosition;

      #define PI 3.14159265359

      float latToMercator(float lat) {
        float latLimit = 0.005;
        float clampedLat = clamp(lat, latLimit, 1.0 - latLimit);
        float latRad = (clampedLat - 0.5) * PI;
        return (log(tan(PI / 4.0 + latRad / 2.0)) / PI + 1.0) / 2.0;
      }

      void main() {
        // Base texture coordinates: Apply Mercator transformation only for tiled sources
        // Skip for equirectangular sources like Blue Marble
        vec2 baseTexCoords = vFinalUv;
        if (uUseEquirectangular < 0.5) {
          // Tiled sources need Mercator adjustment
          baseTexCoords.y = latToMercator(vFinalUv.y);
        }

        vec4 texColor = texture2D(uTexture, baseTexCoords);

        // Blend overlay texture if visible
        // Overlays are ALWAYS Web Mercator tiles, regardless of base map projection
        if (uOverlayVisible > 0.5) {
          vec2 overlayTexCoords = vFinalUv;
          overlayTexCoords.y = latToMercator(vFinalUv.y);
          vec4 overlayColor = texture2D(uOverlayTexture, overlayTexCoords);
          // Blend overlay on top of base using alpha compositing
          texColor.rgb = mix(texColor.rgb, overlayColor.rgb, overlayColor.a);
        }

        // Apply day/night terminator effect and sun reflection
        if (uShowDayNight > 0.5) {
          // Convert UV to spherical coordinates (lat/lon)
          float lon = (vFinalUv.x - 0.5) * 2.0 * PI; // -PI to PI
          float lat = (vFinalUv.y - 0.5) * PI;       // -PI/2 to PI/2

          // Calculate surface normal in world space for equirectangular projection
          // In Three.js: X=right, Y=up, Z=toward camera
          // Map convention: lon=0 faces +Z, lat=0 is equator
          vec3 surfaceNormal = vec3(
            cos(lat) * sin(lon),   // X: east-west
            sin(lat),              // Y: north-south  
            cos(lat) * cos(lon)    // Z: toward camera at lon=0
          );

          // Calculate illumination based on dot product with sun direction
          vec3 sunDir = normalize(uSunDirection);
          float illumination = dot(surfaceNormal, sunDir);
          
          // Smooth terminator with twilight zone
          float daylight = smoothstep(-0.1, 0.1, illumination);
          
          // Apply shadow to night side (darken to about 15% brightness)
          texColor.rgb *= mix(0.15, 1.0, daylight);
          
          // Specular reflection (sun glint on ocean/water) - only for 3D modes
          // Use blue channel dominance to detect water (ocean is blue-ish)
          float blueRatio = texColor.b / (max(texColor.r + texColor.g + texColor.b, 0.01) / 3.0);
          float brightness = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
          // Water tends to be darker and more blue
          float isWater = smoothstep(0.3, 0.15, brightness) * smoothstep(0.8, 1.2, blueRatio);
          float specularity = isWater * 0.9 * uIs3D;
          
          // View direction (camera looks along -Z in view space, but we need world direction)
          vec3 viewDir = normalize(uCameraPosition);
          
          // Specular highlight using reflection
          vec3 reflectDir = reflect(-sunDir, surfaceNormal);
          float specAngle = max(dot(reflectDir, viewDir), 0.0);
          // Softer, broader specular highlight
          float specular = pow(specAngle, 20.0) * specularity * daylight * 0.6;
          
          // Add warm sun reflection color
          vec3 sunColor = vec3(1.0, 0.95, 0.85);
          texColor.rgb += specular * sunColor * 1.2;
        }

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
        uOverlayTexture: { value: createPlaceholderTexture() },
        uOverlayVisible: { value: 0.0 },
        uShowGrid: { value: settingsRef.current.showGrid ? 1.0 : 0.0 },
        uUseEquirectangular: { value: 0.0 },
        uShowDayNight: { value: settingsRef.current.showDayNight ? 1.0 : 0.0 },
        uIs3D: { value: 0.0 },
        uSunDirection: { value: new THREE.Vector3(1, 0, 0) },
        uCameraPosition: { value: new THREE.Vector3(0, 0, 250) }
      },
      side: THREE.DoubleSide,
      transparent: false
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(1, 1, 400, 400);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(5, 5, 5);
    mesh.frustumCulled = false; // Disable frustum culling - the vertex shader transforms extend beyond the original bounds
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

    // Create Sun mesh with glowing shader for day/night visualization
    const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
    const sunMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0xffdd44) },
        coreColor: { value: new THREE.Color(0xffffee) },
        uOpacity: { value: 1.0 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform vec3 coreColor;
        uniform float uOpacity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          // Calculate rim factor based on view angle
          vec3 viewDir = normalize(vViewPosition);
          float rim = dot(vNormal, viewDir);
          
          // Core is bright where facing camera, orange at edges
          vec3 color = mix(glowColor, coreColor, rim);
          
          // Solid in center, fades at rim
          float alpha = smoothstep(0.0, 0.3, rim);
          
          gl_FragColor = vec4(color, alpha * uOpacity);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    
    // Add soft glow layers around the sun (using BackSide for outer glow effect)
    const glowSizes = [1.5, 2.2, 3.2];
    const glowOpacities = [0.35, 0.2, 0.1];
    glowSizes.forEach((scale, i) => {
      const glowGeo = new THREE.SphereGeometry(10 * scale, 32, 32);
      const glowMat = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: { value: new THREE.Color(0xffaa33) },
          uOpacity: { value: 1.0 }
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          uniform float uOpacity;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 viewDir = normalize(vViewPosition);
            // Inverted rim for BackSide - glow at edges
            float rim = 1.0 - abs(dot(vNormal, viewDir));
            float intensity = pow(rim, 1.5) * ${glowOpacities[i].toFixed(2)};
            gl_FragColor = vec4(glowColor, intensity * uOpacity);
          }
        `,
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      sunMesh.add(glowMesh);
    });
    
    // Sun only visible for certain 3D modes (managed in animate loop)
    const initialMode = settingsRef.current.viewMode;
    const showSunInitially = settingsRef.current.showDayNight && ['SPHERE', 'CYLINDER', 'CONE'].includes(initialMode);
    sunMesh.visible = showSunInitially;
    // Position sun initially (will be updated in animate loop)
    sunMesh.position.set(0, 0, 400);
    scene.add(sunMesh);
    sunRef.current = sunMesh;
    console.log('✓ Sun mesh created, visible:', showSunInitially);

    const animate = (time: number) => {
      const deltaTime = lastTimeRef.current === 0 ? 0.016 : Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      const lerpSpeed = 5.0;
      currentSidebarOffsetRef.current += (sidebarOffsetRef.current - currentSidebarOffsetRef.current) * Math.min(deltaTime * lerpSpeed, 1.0);
      camera.setViewOffset(window.innerWidth, window.innerHeight, (currentSidebarOffsetRef.current / 2.0), 0, window.innerWidth, window.innerHeight);

      // Smooth orbit reset animation
      if (orbitResetTargetRef.current && controlsRef.current) {
        const targetPos = orbitResetTargetRef.current;
        const currentPos = camera.position;
        const orbitLerpSpeed = 4.0;
        
        // Lerp camera position towards target
        currentPos.x += (targetPos.x - currentPos.x) * Math.min(deltaTime * orbitLerpSpeed, 1.0);
        currentPos.y += (targetPos.y - currentPos.y) * Math.min(deltaTime * orbitLerpSpeed, 1.0);
        currentPos.z += (targetPos.z - currentPos.z) * Math.min(deltaTime * orbitLerpSpeed, 1.0);
        controlsRef.current.update();
        
        // Check if close enough to target to stop animation
        if (currentPos.distanceTo(targetPos) < 0.1) {
          orbitResetTargetRef.current = null;
        }
      }

      // Update camera position uniform for specular reflections
      if (materialRef.current) {
        materialRef.current.uniforms.uCameraPosition.value.copy(camera.position);
      }

      // Day/night fade animation (smooth ~0.5 second transition)
      const dayNightTarget = settingsRef.current.showDayNight ? 1.0 : 0.0;
      const fadeStep = deltaTime * 2.0; // ~0.5 second fade
      const prevFade = dayNightFadeRef.current;
      if (dayNightFadeRef.current < dayNightTarget) {
        dayNightFadeRef.current = Math.min(dayNightFadeRef.current + fadeStep, dayNightTarget);
      } else if (dayNightFadeRef.current > dayNightTarget) {
        dayNightFadeRef.current = Math.max(dayNightFadeRef.current - fadeStep, dayNightTarget);
      }
      // Log fade changes
      if (Math.abs(prevFade - dayNightFadeRef.current) > 0.01) {
        console.log('Day/night fade:', dayNightFadeRef.current.toFixed(2), 'target:', dayNightTarget);
      }
      
      // Update shader uniform with fade value
      if (materialRef.current) {
        materialRef.current.uniforms.uShowDayNight.value = dayNightFadeRef.current;
      }

      if (starsRef.current) starsRef.current.rotation.y += 0.00005;

      // Update sun position based on custom time/date settings (for day/night terminator)
      if (sunRef.current && materialRef.current) {
        // Use custom time and date from settings (with defaults)
        const hours = settingsRef.current.timeOfDay ?? 12;
        const dayOfYear = settingsRef.current.dayOfYear ?? 1;
        
        // Solar noon is at 12:00 UTC at longitude 0
        const sunLongitudeRad = ((12 - hours) * 15) * (Math.PI / 180); // Convert to radians
        
        // Calculate sun's declination (varies throughout year, -23.4 to +23.4 degrees)
        const declination = -23.44 * Math.cos((2 * Math.PI / 365) * (dayOfYear + 10)) * (Math.PI / 180);
        
        // Sun direction vector for shader (Three.js: X=right, Y=up, Z=toward camera)
        // At lon=0, sun faces +Z. At lon=90E, sun faces +X.
        const sunDirection = new THREE.Vector3(
          Math.cos(declination) * Math.sin(sunLongitudeRad),  // X: east-west
          Math.sin(declination),                               // Y: north-south
          Math.cos(declination) * Math.cos(sunLongitudeRad)   // Z: toward camera at lon=0
        ).normalize();
        
        // Update shader uniform
        materialRef.current.uniforms.uSunDirection.value.copy(sunDirection);
        
        // Position the visual sun mesh based on subsolar point
        // Convert subsolar lat/lon to map world coordinates
        // Map is a 5x5 plane where center (lon=0, lat=0) is at origin
        const MESH_SCALE = 5.0;
        const SPHERE_RADIUS = 10.0 * MESH_SCALE;
        
        const mode = settingsRef.current.viewMode;
        // Sun is only visible for certain 3D shapes where it makes sense (not disc/torus/2D)
        const showSunFor3DMode = ['SPHERE', 'CYLINDER', 'CONE'].includes(mode);
        const sunShouldBeVisible = showSunFor3DMode && dayNightFadeRef.current > 0.01;
        sunRef.current.visible = sunShouldBeVisible;
        
        // Update sun opacity for fade effect
        const sunMat = sunRef.current.material as THREE.ShaderMaterial;
        if (sunMat.uniforms && sunMat.uniforms.uOpacity) {
          sunMat.uniforms.uOpacity.value = dayNightFadeRef.current;
        }
        // Update glow layers opacity too
        sunRef.current.children.forEach((child) => {
          const glowMat = (child as THREE.Mesh).material as THREE.ShaderMaterial;
          if (glowMat.uniforms && glowMat.uniforms.uOpacity) {
            glowMat.uniforms.uOpacity.value = dayNightFadeRef.current;
          }
        });
        
        if (showSunFor3DMode) {
          const sunDistance = 400;
          
          if (mode === 'SPHERE') {
            // For sphere, position sun in 3D space based on spherical direction
            sunRef.current.position.set(
              sunDirection.x * sunDistance,
              sunDirection.y * sunDistance,
              sunDirection.z * sunDistance
            );
          } else if (mode === 'CYLINDER') {
            // For cylinder, sun orbits around at the subsolar longitude, fixed height based on declination
            const cylinderRadius = sunDistance;
            sunRef.current.position.set(
              Math.sin(sunLongitudeRad) * cylinderRadius,
              Math.sin(declination) * SPHERE_RADIUS * 0.5,  // Declination affects Y position on cylinder
              Math.cos(sunLongitudeRad) * cylinderRadius
            );
          } else if (mode === 'CONE') {
            // For cone, similar to cylinder but sun follows the cone's slope
            const coneRadius = sunDistance;
            sunRef.current.position.set(
              Math.sin(sunLongitudeRad) * coneRadius,
              Math.sin(declination) * SPHERE_RADIUS * 0.3,
              Math.cos(sunLongitudeRad) * coneRadius
            );
          }
        }
      }

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
          
          // Reset camera target when switching between 2D and 3D modes
          const was3D = ['SPHERE', 'TORUS', 'CYLINDER', 'CONE', 'DISC'].includes(lastModeRef.current);
          const is3D = ['SPHERE', 'TORUS', 'CYLINDER', 'CONE', 'DISC'].includes(mode);
          if (was3D !== is3D) {
            // Reset target to origin when switching between 2D/3D
            controls.target.set(0, 0, 0);
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
        // Only update the target for 3D modes - 2D modes need the target to stay where user panned
        const is3DMode = ['SPHERE', 'TORUS', 'CYLINDER', 'CONE', 'DISC'].includes(mode);
        if (is3DMode) {
          // Torus center hole is at z = -25 (based on R_hole = 25 in shader)
          controls.target.set(0, 0, -25 * torusT);
        }

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
        m.uniforms.uIs3D.value = is3DMode ? 1.0 : 0.0;

        // Update atmosphere visibility (sphere only, more subtle)
        atmosphereLayersRef.current.forEach((layer) => {
          if (layer.material instanceof THREE.ShaderMaterial) {
            layer.material.uniforms.uLayerIntensity.value = atmosphereFadeRef.current * 0.5;
            layer.visible = atmosphereFadeRef.current > 0.01;
          }
        });
      }

      // Update auto-rotate setting
      controls.autoRotate = settingsRef.current.autoRotate;

      // Update mouse controls based on 2D vs 3D mode
      // 2D modes: Left-click pans (strafe), Right-click orbits
      // 3D modes: Left-click orbits, Right-click pans
      const currentMode = settingsRef.current.viewMode;
      const is2DMode = ['STANDARD', 'MERCATOR', 'GALL_PETERS', 'SINUSOIDAL', 'ROBINSON', 'INFINITE'].includes(currentMode);
      if (is2DMode) {
        controls.mouseButtons = {
          LEFT: THREE.MOUSE.PAN,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE
        };
        controls.touches = {
          ONE: THREE.TOUCH.PAN,
          TWO: THREE.TOUCH.DOLLY_ROTATE
        };
        controls.screenSpacePanning = true;
        controls.panSpeed = 1.5; // Faster panning for 2D navigation
      } else {
        controls.mouseButtons = {
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN
        };
        controls.touches = {
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN
        };
        controls.panSpeed = 1.0; // Default pan speed for 3D
        controls.screenSpacePanning = true;
      }

      controls.update();

      // Camera collision detection
      const mode = settingsRef.current.viewMode;
      const MESH_SCALE = 5.0;
      const SPHERE_RADIUS = 10.0 * MESH_SCALE; // 50
      const MIN_SURFACE_DISTANCE = 5; // Minimum distance from surface
      
      // Get current 3D shape progress
      const sphereT = progressRef.current.sphere;
      const torusT = progressRef.current.torus;
      const cylinderT = progressRef.current.cylinder;
      const coneT = progressRef.current.cone;
      const discT = progressRef.current.disc;
      
      // Calculate if we're in any 3D mode
      const is3D = sphereT > 0.01 || torusT > 0.01 || cylinderT > 0.01 || coneT > 0.01 || discT > 0.01;
      
      if (is3D) {
        const camPos = camera.position.clone();
        const target = controls.target.clone();
        let minAllowedDistance = 0;
        
        if (sphereT > 0.5) {
          // Sphere: simple radial distance from origin
          const distFromCenter = camPos.length();
          minAllowedDistance = SPHERE_RADIUS + MIN_SURFACE_DISTANCE;
          if (distFromCenter < minAllowedDistance) {
            camPos.normalize().multiplyScalar(minAllowedDistance);
            camera.position.copy(camPos);
          }
        } else if (torusT > 0.5) {
          // Torus: center is at (0, 0, -125) in world space
          const R_HOLE = 25.0 * MESH_SCALE; // Major radius = 125
          const R_TUBE = 5.0 * MESH_SCALE;  // Tube radius ≈ 25
          const torusCenter = new THREE.Vector3(0, 0, -R_HOLE);
          
          // Distance from camera to torus axis (the ring center)
          const camToCenter = camPos.clone().sub(torusCenter);
          const camToAxisXZ = new THREE.Vector2(camToCenter.x, camToCenter.z);
          const distToAxis = camToAxisXZ.length();
          
          // Distance from the tube surface
          const distFromRingCenter = Math.abs(distToAxis - R_HOLE);
          const distFromTubeSurface = Math.sqrt(distFromRingCenter * distFromRingCenter + camToCenter.y * camToCenter.y) - R_TUBE;
          
          if (distFromTubeSurface < MIN_SURFACE_DISTANCE) {
            // Push camera away from tube surface
            const pushDir = camToCenter.clone().normalize();
            const pushAmount = MIN_SURFACE_DISTANCE - distFromTubeSurface;
            camera.position.add(pushDir.multiplyScalar(pushAmount));
          }
        } else if (cylinderT > 0.5) {
          // Cylinder: check XZ distance from Y axis
          const distFromAxisXZ = Math.sqrt(camPos.x * camPos.x + camPos.z * camPos.z);
          minAllowedDistance = SPHERE_RADIUS + MIN_SURFACE_DISTANCE;
          if (distFromAxisXZ < minAllowedDistance) {
            const scale = minAllowedDistance / distFromAxisXZ;
            camera.position.x *= scale;
            camera.position.z *= scale;
          }
        } else if (coneT > 0.5) {
          // Cone: radius varies with Y, max at bottom
          const CONE_MAX_RADIUS = 1.1 * SPHERE_RADIUS;
          const CONE_HEIGHT = Math.PI * SPHERE_RADIUS; // approximate
          const normalizedY = (camPos.y / CONE_HEIGHT) + 0.5; // 0 at bottom, 1 at top
          const coneRadiusAtY = CONE_MAX_RADIUS * (1.1 - Math.max(0, Math.min(1, normalizedY)));
          const distFromAxisXZ = Math.sqrt(camPos.x * camPos.x + camPos.z * camPos.z);
          minAllowedDistance = coneRadiusAtY + MIN_SURFACE_DISTANCE;
          if (distFromAxisXZ < minAllowedDistance && coneRadiusAtY > 0) {
            const scale = minAllowedDistance / distFromAxisXZ;
            camera.position.x *= scale;
            camera.position.z *= scale;
          }
        } else if (discT > 0.5) {
          // Disc: flat surface at y=0, push camera above/below
          const DISC_MAX_RADIUS = 2.0 * SPHERE_RADIUS;
          const distFromAxisXZ = Math.sqrt(camPos.x * camPos.x + camPos.z * camPos.z);
          if (distFromAxisXZ < DISC_MAX_RADIUS && Math.abs(camPos.y) < MIN_SURFACE_DISTANCE) {
            camera.position.y = camPos.y >= 0 ? MIN_SURFACE_DISTANCE : -MIN_SURFACE_DISTANCE;
          }
        }
      } else {
        // 2D mode: prevent camera from getting too close to the map plane (at z=0)
        // The map extends in X and Y, camera should stay at positive Z
        const MIN_2D_DISTANCE = 5; // Minimum distance from the 2D plane
        if (camera.position.z < MIN_2D_DISTANCE) {
          camera.position.z = MIN_2D_DISTANCE;
        }
        // Keep target on or in front of the map plane
        if (controls.target.z < 0) {
          controls.target.z = 0;
        }
      }

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
        <AttributionOverlay mapLayer={settings.mapLayer} overlayLayer={settings.overlayLayer} sidebarOffset={sidebarOffset} />
    </div>
  );
};

export default MapCanvas;
