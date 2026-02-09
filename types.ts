
export interface Vector2 {
  x: number;
  y: number;
}

export type ViewMode = 
  | 'STANDARD' 
  | 'MERCATOR' 
  | 'GALL_PETERS' 
  | 'SINUSOIDAL'
  | 'ROBINSON'
  | 'INFINITE' 
  | 'TORUS' 
  | 'SPHERE'
  | 'CYLINDER'
  | 'CONE'
  | 'DISC';

export type MapLayer =
  | 'STANDARD'
  | 'HOT'
  | 'OPENTOPOMAP'
  | 'CARTODARK'
  | 'CARTOVOYAGER'
  | 'BLUE_MARBLE'
  | 'NASA_VIIRS';

export type OverlayLayer = 'NONE' | 'HIKING_TRAILS' | 'CYCLING_ROUTES' | 'MTB_TRAILS' | 'OPEN_RAILWAY_MAP' | 'PLACE_LABELS';

export interface MapSettings {
  zoom: number;
  rotation: Vector2;
  showGrid: boolean;
  showAtmosphere: boolean;
  showStars: boolean;
  showDayNight: boolean;
  autoRotate: boolean;
  viewMode: ViewMode;
  mapLayer: MapLayer;
  overlayLayer: OverlayLayer;
  timeOfDay: number; // 0-24 hours
  dayOfYear: number; // 1-366
}
