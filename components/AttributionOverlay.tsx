import React from 'react';
import { MapLayer } from '../types';

interface AttributionOverlayProps {
  mapLayer: MapLayer;
  sidebarOffset: number;
}

interface Attribution {
  text: string;
  links: Array<{ text: string; url: string }>;
}

const ATTRIBUTIONS: Record<MapLayer, Attribution> = {
  CYCLOSM: {
    text: '© ',
    links: [
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' },
      { text: 'CyclOSM', url: 'https://www.cyclosm.org/' }
    ]
  },
  STANDARD: {
    text: '© ',
    links: [
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' }
    ]
  },
  HOT: {
    text: '© ',
    links: [
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' },
      { text: 'Humanitarian OSM Team', url: 'https://www.hotosm.org/' }
    ]
  },
  OPENTOPOMAP: {
    text: '© ',
    links: [
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' },
      { text: 'SRTM', url: 'https://www2.jpl.nasa.gov/srtm/' },
      { text: 'OpenTopoMap', url: 'https://opentopomap.org/' }
    ]
  },
  CARTODARK: {
    text: '© ',
    links: [
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' },
      { text: 'CARTO', url: 'https://carto.com/attributions' }
    ]
  },
  CARTOVOYAGER: {
    text: '© ',
    links: [
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' },
      { text: 'CARTO', url: 'https://carto.com/attributions' }
    ]
  },
  SATELLITE: {
    text: 'Source: ',
    links: [
      { text: 'Esri, Maxar, Earthstar Geographics, and the GIS User Community', url: 'https://www.esri.com/en-us/legal/terms/full-master-agreement' }
    ]
  }
};

const AttributionOverlay: React.FC<AttributionOverlayProps> = ({ mapLayer, sidebarOffset }) => {
  const attribution = ATTRIBUTIONS[mapLayer];

  return (
    <div
      className="fixed bottom-4 z-50 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={{ right: `${sidebarOffset + 16}px` }}
    >
      <div className="flex items-center text-[9px] font-mono text-zinc-300 tracking-wide">
        <span>{attribution.text}</span>
        {attribution.links.map((link, index) => (
          <React.Fragment key={link.url}>
            {index > 0 && <span className="mx-1">|</span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-colors"
            >
              {link.text}
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AttributionOverlay;
