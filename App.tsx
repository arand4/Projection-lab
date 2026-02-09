
import React, { useState, useCallback, useRef } from 'react';
import MapCanvas from './components/MapCanvas';
import { MapSettings, ViewMode, MapLayer, OverlayLayer } from './types';
import {
  Info,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
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
  Earth,
  Footprints,
  Train,
  Star,
  Sun,
  RotateCcw,
  Calendar,
  Clock
} from 'lucide-react';

const App: React.FC = () => {
  // Get current time/date for defaults
  const now = new Date();
  const currentHour = now.getUTCHours() + now.getUTCMinutes() / 60;
  const currentDayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);

  const [settings, setSettings] = useState<MapSettings>({
    zoom: 1.0,
    rotation: { x: 0, y: 0 },
    showGrid: true,
    showAtmosphere: true,
    showStars: true,
    showDayNight: true,
    autoRotate: false,
    viewMode: 'SPHERE',
    mapLayer: 'BLUE_MARBLE',
    overlayLayer: 'NONE',
    timeOfDay: currentHour,
    dayOfYear: currentDayOfYear
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMapEngineOpen, setIsMapEngineOpen] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [is2DOpen, setIs2DOpen] = useState(true);
  const [is3DOpen, setIs3DOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTimeDateOpen, setIsTimeDateOpen] = useState(false);
  const [resetOrbitTrigger, setResetOrbitTrigger] = useState(0);
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

  const setOverlay = (overlay: OverlayLayer) => {
    console.log('✓ setOverlay called with:', overlay);
    setSettings(s => {
      console.log('✓ Settings updated to overlayLayer:', overlay);
      return { ...s, overlayLayer: overlay };
    });
  };

  const toggleGrid = () => setSettings(s => ({ ...s, showGrid: !s.showGrid }));
  const toggleAtmosphere = () => setSettings(s => ({ ...s, showAtmosphere: !s.showAtmosphere }));
  const toggleAutoRotate = () => setSettings(s => ({ ...s, autoRotate: !s.autoRotate }));
  const toggleStars = () => setSettings(s => ({ ...s, showStars: !s.showStars }));
  const toggleDayNight = () => setSettings(s => ({ ...s, showDayNight: !s.showDayNight }));
  const setTimeOfDay = (time: number) => setSettings(s => ({ ...s, timeOfDay: time }));
  const setDayOfYear = (day: number) => setSettings(s => ({ ...s, dayOfYear: day }));
  const resetOrbit = () => setResetOrbitTrigger(t => t + 1);
  const resetTimeToCurrent = () => {
    const now = new Date();
    const hour = now.getUTCHours() + now.getUTCMinutes() / 60;
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
    setSettings(s => ({ ...s, timeOfDay: hour, dayOfYear }));
  };

  // Format time for display
  const formatTime = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} UTC`;
  };

  // Convert day of year to date string
  const dayOfYearToDate = (day: number) => {
    const date = new Date(new Date().getFullYear(), 0, day);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

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
    { id: 'GALL_PETERS', name: 'Gall-Peters (Equal Area)', icon: MapIcon },
    { id: 'MERCATOR', name: 'Mercator (Navigational)', icon: Compass },
    { id: 'ROBINSON', name: 'Robinson (Pseudocylindrical)', icon: Earth },
    { id: 'SINUSOIDAL', name: 'Sinusoidal (Equal Area)', icon: Triangle },
    { id: 'INFINITE', name: 'Infinite (Transverse)', icon: Zap },
  ];

  const mapLayers: { id: MapLayer; name: string; icon: any; color: string }[] = [
    { id: 'BLUE_MARBLE', name: 'NASA Blue Marble', icon: Earth, color: 'text-cyan-400' },
    { id: 'NASA_VIIRS', name: 'NASA VIIRS', icon: Globe, color: 'text-purple-400' },
    { id: 'OPENTOPOMAP', name: 'OpenTopoMap', icon: Mountain, color: 'text-amber-400' },
    { id: 'HOT', name: 'Humanitarian', icon: Heart, color: 'text-rose-400' },
    { id: 'STANDARD', name: 'OSM Standard', icon: Navigation, color: 'text-blue-400' },
    { id: 'CARTODARK', name: 'Carto Dark', icon: Moon, color: 'text-indigo-400' },
  ];

  const overlayLayers: { id: OverlayLayer; name: string; icon: any; color: string }[] = [
    { id: 'NONE', name: 'No Overlay', icon: Layers, color: 'text-zinc-400' },
    { id: 'HIKING_TRAILS', name: 'Hiking Trails', icon: Footprints, color: 'text-green-400' },
    { id: 'CYCLING_ROUTES', name: 'Cycling Routes', icon: Bike, color: 'text-orange-400' },
    { id: 'MTB_TRAILS', name: 'MTB Trails', icon: Mountain, color: 'text-amber-400' },
    { id: 'OPEN_RAILWAY_MAP', name: 'Railways', icon: Train, color: 'text-purple-400' },
    { id: 'PLACE_LABELS', name: 'Place Labels', icon: MapIcon, color: 'text-cyan-400' },
  ];

  return (
    <div className="flex h-screen w-screen bg-zinc-950 font-sans text-zinc-100 overflow-hidden">
      <div className="relative flex-1 h-full">
        <MapCanvas settings={settings} sidebarOffset={isSidebarOpen ? 380 : 0} resetOrbitTrigger={resetOrbitTrigger} />
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
              <button
                onClick={() => setIsMapEngineOpen(!isMapEngineOpen)}
                className="w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Layers size={12} />
                  Map Engine
                </div>
                {isMapEngineOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {isMapEngineOpen && (
                <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-300">
                  {mapLayers.map(layer => (
                    <button key={layer.id} onClick={() => setLayer(layer.id)} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${settings.mapLayer === layer.id ? 'bg-white text-zinc-950 border-white shadow-lg' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800'}`}>
                      <layer.icon size={20} className={settings.mapLayer === layer.id ? 'text-zinc-950' : layer.color} />
                      <span className="text-[8px] font-black uppercase tracking-widest text-center">{layer.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-5">
              <button
                onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                className="w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Activity size={12} />
                  Overlay Layers
                </div>
                {isOverlayOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {isOverlayOpen && (
                <div className="grid grid-cols-2 gap-2 animate-in fade-in duration-300">
                  {overlayLayers.map(layer => (
                    <button key={layer.id} onClick={() => setOverlay(layer.id)}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300
                        ${settings.overlayLayer === layer.id ? 'bg-white text-zinc-950 border-white shadow-lg' : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800'}`}>
                      <layer.icon size={20} className={settings.overlayLayer === layer.id ? 'text-zinc-950' : layer.color} />
                      <span className="text-[8px] font-black uppercase tracking-widest text-center">{layer.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-5">
              <button
                onClick={() => setIs2DOpen(!is2DOpen)}
                className="w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapIcon size={12} />
                  Cartography (2D)
                </div>
                {is2DOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {is2DOpen && (
                <div className="space-y-2.5 animate-in fade-in duration-300">
                  {projections2D.map((proj) => (
                    <button key={proj.id} onClick={() => setMode(proj.id)} className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative group ${settings.viewMode === proj.id ? 'bg-zinc-100 text-zinc-950 border-white shadow-lg' : isTorus && proj.id === 'INFINITE' ? 'bg-blue-900/40 border-blue-500 text-blue-100' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-700'}`}>
                      <div className="flex items-center gap-3">
                        <proj.icon size={16} className={`transition-colors ${settings.viewMode === proj.id ? 'text-zinc-950' : isTorus && proj.id === 'INFINITE' ? 'text-blue-400' : 'text-zinc-500'}`} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">{proj.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-5">
              <button
                onClick={() => setIs3DOpen(!is3DOpen)}
                className="w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Box size={12} />
                  Dimensional (3D)
                </div>
                {is3DOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {is3DOpen && (
                <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-300">
                  <button onClick={() => handle3DTransition('SPHERE')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isSphere ? 'bg-emerald-600 text-white border-emerald-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                    <Globe size={20} className={isSphere ? 'animate-pulse' : ''} />
                    <span className="text-[8px] uppercase font-black tracking-widest">Sphere</span>
                  </button>
                  <button onClick={() => handle3DTransition('DISC')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isDisc ? 'bg-rose-600 text-white border-rose-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                    <DiscIcon size={20} className={isDisc ? 'animate-pulse' : ''} />
                    <span className="text-[8px] uppercase font-black tracking-widest text-center">Disc World</span>
                  </button>
                  <button onClick={() => handle3DTransition('CONE')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isCone ? 'bg-orange-600 text-white border-orange-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                    <Pyramid size={20} className={isCone ? 'animate-pulse' : ''} />
                    <span className="text-[8px] uppercase font-black tracking-widest text-center">Cone</span>
                  </button>
                  <button onClick={() => handle3DTransition('CYLINDER')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${isCylinder ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                    <CylinderIcon size={20} className={isCylinder ? 'animate-pulse' : ''} />
                    <span className="text-[8px] uppercase font-black tracking-widest text-center">Cylinder</span>
                  </button>
                  <button onClick={() => handle3DTransition('TORUS')} className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 col-span-2 ${isTorus ? 'bg-blue-600 text-white border-blue-400' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                    <Rotate3d size={20} className={isTorus ? 'animate-pulse' : ''} />
                    <span className="text-[8px] uppercase font-black tracking-widest text-center">Torus</span>
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Wind size={12} />
                  Settings
                </div>
                {isSettingsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {isSettingsOpen && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2"><GridIcon size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Geo Grid</span></div>
                    <button onClick={toggleGrid} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.showGrid ? 'bg-emerald-600 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.showGrid ? 'translate-x-5' : 'translate-x-0'}`} /></button>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2"><Cloud size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Atmosphere</span></div>
                    <button onClick={toggleAtmosphere} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.viewMode === 'SPHERE' && settings.showAtmosphere ? 'bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.viewMode === 'SPHERE' && settings.showAtmosphere ? 'translate-x-5' : 'translate-x-0'}`} /></button>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2"><Rotate3d size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Auto Rotate</span></div>
                    <button onClick={toggleAutoRotate} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.autoRotate ? 'bg-amber-600 border-amber-400 shadow-[0_0_10px_rgba(217,119,6,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.autoRotate ? 'translate-x-5' : 'translate-x-0'}`} /></button>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2"><Star size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Stars</span></div>
                    <button onClick={toggleStars} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.showStars ? 'bg-purple-600 border-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.showStars ? 'translate-x-5' : 'translate-x-0'}`} /></button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setIsTimeDateOpen(!isTimeDateOpen)}
                className="w-full flex items-center justify-between text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sun size={12} />
                  Day/Night & Time
                </div>
                {isTimeDateOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {isTimeDateOpen && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2"><Sun size={12} className="text-zinc-500" /><span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Day/Night</span></div>
                    <button onClick={toggleDayNight} className={`w-10 h-5 rounded-full transition-all duration-500 relative border ${settings.showDayNight ? 'bg-yellow-600 border-yellow-400 shadow-[0_0_10px_rgba(202,138,4,0.3)]' : 'bg-zinc-900 border-zinc-800'}`}><div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-all duration-500 ${settings.showDayNight ? 'translate-x-5' : 'translate-x-0'}`} /></button>
                  </div>

                  {settings.showDayNight && (
                    <>
                      <div className="px-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Clock size={10} className="text-zinc-600" />
                            <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Time</span>
                          </div>
                          <span className="text-[9px] font-mono text-yellow-500">{formatTime(settings.timeOfDay)}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="24"
                          step="0.1"
                          value={settings.timeOfDay}
                          onChange={(e) => setTimeOfDay(parseFloat(e.target.value))}
                          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                        />
                      </div>
                      <div className="px-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar size={10} className="text-zinc-600" />
                            <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Date</span>
                          </div>
                          <span className="text-[9px] font-mono text-yellow-500">{dayOfYearToDate(settings.dayOfYear)}</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="365"
                          step="1"
                          value={settings.dayOfYear}
                          onChange={(e) => setDayOfYear(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                        />
                      </div>
                      <div className="pt-2">
                        <button onClick={resetTimeToCurrent} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-600/40 transition-all duration-300 text-yellow-500 hover:text-yellow-400">
                          <RotateCcw size={12} />
                          <span className="text-[9px] font-bold uppercase tracking-widest">Reset to Current</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="pt-6">
              <button onClick={resetOrbit} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all duration-300 text-zinc-400 hover:text-zinc-200">
                <RotateCcw size={12} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Reset Orbit</span>
              </button>
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
