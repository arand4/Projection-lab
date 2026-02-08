
import React, { useState, useCallback, useRef } from 'react';
import MapCanvas from './components/MapCanvas';
import { MapSettings, ViewMode, MapLayer } from './types';
import { 
  Info, 
  ChevronRight, 
  ChevronLeft,
  Rotate3d,
  Layers,
  Activity,
  Globe,
  Map as MapIcon,
  Grid as GridIcon,
  Compass,
  Zap,
  Box,
  Triangle,
  Bike,
  Navigation,
  Heart,
  Mountain,
  Moon,
  Cloud,
  Wind,
  Cylinder as CylinderIcon,
  Pyramid,
  Disc as DiscIcon,
  Earth
} from 'lucide-react';

const App: React.FC = () => {
  const [settings, setSettings] = useState<MapSettings>({
    zoom: 1.0,
    rotation: { x: 0, y: 0 },
    showGrid: true,
    showAtmosphere: true,
    viewMode: 'SPHERE',
    mapLayer: 'SATELLITE'
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const last2DMode = useRef<ViewMode>('STANDARD');

  const setMode = useCallback((target: ViewMode) => {
    console.log('✓ setMode called with:', target);
    const is3D = ['SPHERE', 'TORUS', 'CYLINDER', 'CONE', 'DISC'].includes(target);
    if (!is3D) last2DMode.current = target;
    setSettings(s => {
      console.log('✓ Settings updated to viewMode:', target);
      return { ...s, viewMode: target };
    });
  }, []);

  const setLayer = (layer: MapLayer) => {
    console.log('✓ setLayer called with:', layer);
    setSettings(s => {
      console.log('✓ Settings updated to mapLayer:', layer);
      return { ...s, mapLayer: layer };
    });
  };
  const toggleGrid = () => setSettings(s => ({ ...s, showGrid: !s.showGrid }));
  const toggleAtmosphere = () => setSettings(s => ({ ...s, showAtmosphere: !s.showAtmosphere }));

  const handle3DTransition = (target3D: ViewMode) => {
    const currentMode = settings.viewMode;
    if (currentMode === target3D) {
      setMode(last2DMode.current);
    } else {
      setMode(target3D);
    }
  };

  const isTorus = settings.viewMode === 'TORUS';
  const isSphere = settings.viewMode === 'SPHERE';
  const isCylinder = settings.viewMode === 'CYLINDER';
  const isCone = settings.viewMode === 'CONE';
  const isDisc = settings.viewMode === 'DISC';
  const isDimensional = isTorus || isSphere || isCylinder || isCone || isDisc;

  const projections2D: { id: ViewMode; name: string; icon: any }[] = [
    { id: 'STANDARD', name: 'Standard (Plate Carrée)', icon: GridIcon },
    { id: 'INFINITE', name: 'Infinite (Transverse)', icon: Zap },
    { id: 'MERCATOR', name: 'Mercator (Navigational)', icon: Compass },
    { id: 'ROBINSON', name: 'Robinson (Pseudocylindrical)', icon: Earth },
    { id: 'GALL_PETERS', name: 'Gall-Peters (Equal Area)', icon: MapIcon },
    { id: 'SINUSOIDAL', name: 'Sinusoidal (Equal Area)', icon: Triangle },
  ];

  const mapLayers: { id: MapLayer; name: string; icon: any; color: string }[] = [
    { id: 'CYCLOSM', name: 'CyclOSM (Topo)', icon: Bike, color: 'text-emerald-400' },
    { id: 'SATELLITE', name: 'ESRI Satellite', icon: Cloud, color: 'text-sky-400' },
    { id: 'OPENTOPOMAP', name: 'OpenTopoMap', icon: Mountain, color: 'text-amber-400' },
    { id: 'STANDARD', name: 'OSM Standard', icon: Navigation, color: 'text-blue-400' },
    { id: 'HOT', name: 'Humanitarian', icon: Heart, color: 'text-rose-400' },
    { id: 'CARTODARK', name: 'Carto Dark', icon: Moon, color: 'text-indigo-400' },
  ];

  return (
    <div className="flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden">
      <div className="relative flex-1 h-full">
        <MapCanvas settings={settings} sidebarOffset={isSidebarOpen ? 380 : 0} />
        {!isSidebarOpen && (
          <button onClick={() => setIsSidebarOpen(true)} className="absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-xl">
            <ChevronLeft size={20} />
          </button>
        )}
      </div>

      <aside className={`fixed top-0 right-0 h-full bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl z-40 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-[380px]`}>
        <div className="h-full flex flex-col p-10 overflow-y-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl border transition-all duration-500 ${isDimensional ? 'bg-emerald-600/20 border-emerald-500/30' : 'bg-blue-600/20 border-blue-500/30'}`}>
                <Activity className={isDimensional ? 'text-emerald-400' : 'text-blue-400'} size={20} />
              </div>
              <div>
                <h1 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Projection Lab v43</h1>
                <p className="text-[9px] text-zinc-500 font-mono text-nowrap uppercase">Map Projection Playground</p>
              </div>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>

          <section className="space-y-10 pb-12">
            <div className="space-y-5">
              <label className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2"><Layers size={12} /> Map Engine</label>
              <div className="grid grid-cols-2 gap-2">
                {mapLayers.map(layer => (
                  <button key={layer.id} onClick={() => setLayer(layer.id)} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${settings.mapLayer === layer.id ? 'bg-white text-zinc-950 border-white shadow-lg' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800'}`}>
                    <layer.icon size={20} className={settings.mapLayer === layer.id ? 'text-zinc-950' : layer.color} />
                    <span className="text-[8px] font-black uppercase tracking-widest text-center">{layer.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <label className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2"><MapIcon size={12} /> Cartography (2D)</label>
              <div className="space-y-2.5">
                {projections2D.map((proj) => (
                  <button key={proj.id} onClick={() => setMode(proj.id)} className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${settings.viewMode === proj.id ? 'bg-zinc-100 text-zinc-950 border-white shadow-lg' : isTorus && proj.id === 'INFINITE' ? 'bg-blue-900/40 border-blue-500 text-blue-100' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700'}`}>
                    <div className="flex items-center gap-3">
                      <proj.icon size={16} className={`transition-colors ${settings.viewMode === proj.id ? 'text-zinc-950' : isTorus && proj.id === 'INFINITE' ? 'text-blue-400' : 'text-zinc-500'}`} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">{proj.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <label className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2"><Box size={12} /> Dimensional (3D)</label>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handle3DTransition('SPHERE')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isSphere ? 'bg-emerald-600 text-white border-emerald-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                  <Globe size={20} className={isSphere ? 'animate-pulse' : ''} />
                  <span className="text-[8px] uppercase font-black tracking-widest">Sphere</span>
                </button>
                <button onClick={() => handle3DTransition('TORUS')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isTorus ? 'bg-blue-600 text-white border-blue-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                  <Rotate3d size={20} className={isTorus ? 'animate-pulse' : ''} />
                  <span className="text-[8px] uppercase font-black tracking-widest text-center">Torus</span>
                </button>
                <button onClick={() => handle3DTransition('CYLINDER')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isCylinder ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                  <CylinderIcon size={20} className={isCylinder ? 'animate-pulse' : ''} />
                  <span className="text-[8px] uppercase font-black tracking-widest text-center">Cylinder</span>
                </button>
                <button onClick={() => handle3DTransition('CONE')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isCone ? 'bg-orange-600 text-white border-orange-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                  <Pyramid size={20} className={isCone ? 'animate-pulse' : ''} />
                  <span className="text-[8px] uppercase font-black tracking-widest text-center">Cone</span>
                </button>
                <button onClick={() => handle3DTransition('DISC')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${isDisc ? 'bg-rose-600 text-white border-rose-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                  <DiscIcon size={20} className={isDisc ? 'animate-pulse' : ''} />
                  <span className="text-[8px] uppercase font-black tracking-widest text-center">Horizontal Disc World</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2"><Wind size={12} /> Visualization</label>

              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2"><GridIcon size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Geo Grid</span></div>
                <button onClick={toggleGrid} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.showGrid ? 'bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.showGrid ? 'translate-x-5' : 'translate-x-0'}`} /></button>
              </div>

              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2"><Cloud size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Atmosphere</span></div>
                <button onClick={toggleAtmosphere} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.viewMode === 'SPHERE' && settings.showAtmosphere ? 'bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.viewMode === 'SPHERE' && settings.showAtmosphere ? 'translate-x-5' : 'translate-x-0'}`} /></button>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5">
              <div className="flex items-start gap-4 p-5 bg-blue-500/[0.02] border border-blue-500/10 rounded-2xl">
                <Info className="text-blue-500/60 shrink-0 mt-0.5" size={16} />
                <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">
                  Licensed under <a href="https://github.com/arand4/Projection-lab/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">GNU GPL v3</a>. View source on <a href="https://github.com/arand4/Projection-lab" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">GitHub</a>.
                </p>
              </div>
            </div>
          </section>
          <div className="mt-auto pt-6 text-[8px] text-zinc-800 text-center font-mono uppercase tracking-[0.5em]">Projection Lab v43</div>
        </div>
      </aside>
    </div>
  );
};

export default App;
