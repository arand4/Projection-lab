º# Projection Lab

![Torus Projection](Torus%20Projection.png)

An interactive 3D map projection playground exploring how different cartographic projections transform geographical data. Built with React, Three.js, and TypeScript.
This project was basically entirely programmed by AI.

Link: https://arand4.github.io/Projection-lab/

## Features

### 🌍 Map Layers
- **NASA Blue Marble** - High-resolution cloudless Earth imagery from NASA
- **NASA VIIRS** - Daily updated satellite imagery from NASA EOSDIS
- **OpenTopoMap** - Detailed topographic maps
- **Humanitarian** - HOT (Humanitarian OpenStreetMap Team) style
- **OSM Standard** - OpenStreetMap standard style
- **Carto Dark** - Dark theme cartography

### 🗺️ 2D Projections
- Standard (Plate Carrée)
- Gall-Peters (Equal Area)
- Mercator (Navigational)
- Robinson (Pseudocylindrical)
- Sinusoidal (Equal Area)
- Infinite (Transverse)

### 📦 3D Visualizations
- Sphere
- Disc World
- Cone
- Cylinder
- Torus

### ✨ Visual Features
- **Atmospheric Effects** - Subtle atmospheric glow on sphere projection with manual toggle
- **Grid Overlay** - Optional coordinate grid for reference
- **Smooth Morphing** - Seamless transitions between projections (transitions could get some smoothing)
- **Interactive Controls** - Orbit camera with zoom and rotation
- **Star Field** - Ambient space background

## Technologies

- **React** - UI framework
- **Three.js** - 3D rendering engine
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Modern icon library
## Credits

### Map Data
- [NASA Blue Marble](https://visibleearth.nasa.gov/collection/1484/blue-marble) - Imagery courtesy of NASA's Earth Observatory
- [NASA EOSDIS GIBS](https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/gibs) - VIIRS satellite imagery
- [OpenTopoMap](https://opentopomap.org/)
- [SRTM](https://www2.jpl.nasa.gov/srtm/)
- [Humanitarian OSM Team](https://www.hotosm.org/)
- © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)
- [CARTO](https://carto.com/attributions)

## License

Map data is subject to the licenses of their respective providers. See attribution links above for details.
