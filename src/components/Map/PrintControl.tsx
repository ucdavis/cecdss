import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-easyprint';
import { useLeaflet } from 'react-leaflet';

export const PrintControl = () => {
  const { map } = useLeaflet();

  useEffect(() => {
    (L as any) // since L types do not have our easyPrint extension, we'll just cast as any type
      .easyPrint({
        exportOnly: true,
        title: 'Export map',
        position: 'bottomleft',
        sizeModes: ['Current', 'A4Portrait', 'A4Landscape']
      })
      .addTo(map);
  }, [map]);

  return null;
};
