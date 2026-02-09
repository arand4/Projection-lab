import React from 'react';
import { MapLayer, OverlayLayer } from '../types';

interface AttributionOverlayProps {
  mapLayer: MapLayer;
  overlayLayer: OverlayLayer;
  sidebarOffset: number;
}

interface Attribution {
  text: string;
  links: Array<{ text: string; url: string }>;
}

const ATTRIBUTIONS: Record<MapLayer, Attribution> = {
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
  BLUE_MARBLE: {
    text: 'Imagery: ',
    links: [
      { text: 'NASA Blue Marble', url: 'https://visibleearth.nasa.gov/collection/1484/blue-marble' },
      { text: 'NASA Goddard Space Flight Center', url: 'https://www.nasa.gov/goddard' }
    ]
  },
  NASA_VIIRS: {
    text: 'Imagery: ',
    links: [
      { text: 'NASA EOSDIS GIBS', url: 'https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs' },
      { text: 'VIIRS', url: 'https://www.nasa.gov/mission_pages/NPP/mission_overview/index.html' }
    ]
  }
};

const OVERLAY_ATTRIBUTIONS: Record<Exclude<OverlayLayer, 'NONE'>, Attribution> = {
  OCEAN_TEMP: {
    text: 'Overlay: ',
    links: [
      { text: 'NASA EOSDIS GIBS', url: 'https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs' },
      { text: 'MODIS Aqua SST', url: 'https://oceancolor.gsfc.nasa.gov/data/aqua/' }
    ]
  },
  HIKING_TRAILS: {
    text: 'Overlay: © ',
    links: [
      { text: 'Waymarked Trails', url: 'https://waymarkedtrails.org/' },
      { text: 'OpenStreetMap contributors', url: 'https://www.openstreetmap.org/copyright' }
    ]
  }
};

const AttributionOverlay: React.FC<AttributionOverlayProps> = ({ mapLayer, overlayLayer, sidebarOffset }) => {
  const attribution = ATTRIBUTIONS[mapLayer];
  const overlayAttribution = overlayLayer !== 'NONE' ? OVERLAY_ATTRIBUTIONS[overlayLayer] : null;

  return (
    <div
      className="fixed bottom-4 z-50 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={{ right: `${sidebarOffset + 16}px` }}
    >
      <div className="flex flex-col gap-1 text-[9px] font-mono text-zinc-300 tracking-wide">
        {/* Base map attribution */}
        <div className="flex items-center">
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

        {/* Overlay attribution if active */}
        {overlayAttribution && (
          <div className="flex items-center">
            <span>{overlayAttribution.text}</span>
            {overlayAttribution.links.map((link, index) => (
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
        )}
      </div>
    </div>
  );
};

export default AttributionOverlay;
