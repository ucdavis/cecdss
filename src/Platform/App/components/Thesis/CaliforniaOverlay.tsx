import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

export const CaliforniaOverlay: React.FC = () => {
  const map = useMap();
  const [svgElement, setSvgElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const caData = (window as any).californiaGeometry;
    if (!caData || !map) return;

    // Create container div for the overlay
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '400';

    const updateMask = () => {
      const mapSize = map.getSize();
      
      // Get the California feature
      const caFeature = caData.type === 'FeatureCollection' 
        ? caData.features[0] 
        : caData;

      // Build path for inverse clip (outer box with CA hole)
      let pathString = `polygon(0px 0px, 0px ${mapSize.y}px, ${mapSize.x}px ${mapSize.y}px, ${mapSize.x}px 0px, 0px 0px), `;
      
      if (caFeature.geometry.type === 'MultiPolygon') {
        caFeature.geometry.coordinates.forEach((polygon: any) => {
          polygon.forEach((ring: any) => {
            const points = ring.map((coord: any) => {
              const point = map.latLngToContainerPoint([coord[1], coord[0]]);
              return `${point.x}px ${point.y}px`;
            }).join(', ');
            pathString += `polygon(${points}), `;
          });
        });
      } else if (caFeature.geometry.type === 'Polygon') {
        caFeature.geometry.coordinates.forEach((ring: any) => {
          const points = ring.map((coord: any) => {
            const point = map.latLngToContainerPoint([coord[1], coord[0]]);
            return `${point.x}px ${point.y}px`;
          }).join(', ');
          pathString += `polygon(${points}), `;
        });
      }

      // Remove trailing comma
      pathString = pathString.slice(0, -2);
      
      container.style.backgroundColor = 'rgba(156, 163, 175, 0.6)';
      container.style.clipPath = pathString;
      (container.style as any).webkitClipPath = pathString;
    };

    updateMask();
    
    // Add to map
    const mapContainer = map.getContainer();
    mapContainer.appendChild(container);
    setSvgElement(container);

    // Update on map events
    const handleUpdate = () => updateMask();
    map.on('zoom', handleUpdate);
    map.on('move', handleUpdate);
    map.on('moveend', handleUpdate);

    return () => {
      map.off('zoom', handleUpdate);
      map.off('move', handleUpdate);
      map.off('moveend', handleUpdate);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [map]);

  // Store geometry globally for CursorFollower access
  useEffect(() => {
    const loadGeometry = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/JaggeryArray/50ad17645a290ee4445e1113609de5e4/raw/california.geojson');
        const data = await response.json();
        (window as any).californiaGeometry = data;
      } catch (error) {
        console.error('Error loading CA geometry:', error);
      }
    };

    if (!(window as any).californiaGeometry) {
      loadGeometry();
    }
  }, []);

  return null; // React component doesn't render anything directly
};