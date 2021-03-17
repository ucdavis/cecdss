import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-easyprint';
import { useLeaflet } from 'react-leaflet';

export const PrintControl = () => {
  const { map } = useLeaflet();

  useEffect(() => {
    L.easyPrint({
      exportOnly: true,
      title: 'Export map',
      position: 'bottomleft',
      sizeModes: ['Current', 'A4Portrait', 'A4Landscape']
    }).addTo(map);
  }, [map]);

  return null;
};
