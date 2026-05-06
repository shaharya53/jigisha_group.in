import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function ContactMap({ mapIn }: { mapIn: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Bhopal HQ coordinates
    const position: [number, number] = [23.2330, 77.4350]; 

    const map = L.map(containerRef.current, {
      center: position,
      zoom: 14,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    L.marker(position, { icon: customIcon })
      .addTo(map)
      .bindPopup('<b>Jigisha Group HQ</b><br>Bhopal, Madhya Pradesh')
      .openPopup();

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 ${mapIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ border: "1px solid #e2e8f0", zIndex: 1 }}
    />
  );
}

