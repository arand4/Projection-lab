
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

export type MapLayer = 'CYCLOSM' | 'STANDARD' | 'HOT' | 'OPENTOPOMAP' | 'CARTODARK' | 'CARTOVOYAGER' | 'SATELLITE';

export interface MapSettings {
  zoom: number;
  rotation: Vector2;
  showGrid: boolean;
  showAtmosphere: boolean;
  viewMode: ViewMode;
  mapLayer: MapLayer;
}
