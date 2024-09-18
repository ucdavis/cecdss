import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-easyprint';
import { useMap } from 'react-leaflet';

export const PrintControl = () => {
  const map = useMap();
  const printControlRef = useRef<any>(null);

  useEffect(() => {
    if (printControlRef.current) {
      return;
    }

    printControlRef.current = (L as any).easyPrint({
      exportOnly: true,
      title: 'Export map',
      position: 'bottomleft',
      sizeModes: ['Current', 'A4Portrait', 'A4Landscape']
    }).addTo(map);

    return () => {
      if (printControlRef.current) {
        map.removeControl(printControlRef.current);
        printControlRef.current = null;
      }
    };
  }, [map]);

  return null;
};
