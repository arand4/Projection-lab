
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

export type OverlayLayer = 'NONE' | 'OCEAN_TEMP' | 'HIKING_TRAILS';

export interface MapSettings {
  zoom: number;
  rotation: Vector2;
  showGrid: boolean;
  showAtmosphere: boolean;
  viewMode: ViewMode;
  mapLayer: MapLayer;
  overlayLayer: OverlayLayer;
}
