import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const CITIES = [
  { name: "Ahmedabad (HQ)", lat: 23.02, lon: 72.57, type: "hq"   },
  { name: "Bhopal (Regd.)", lat: 23.25, lon: 77.40, type: "regd" },
  { name: "Delhi NCR",      lat: 28.61, lon: 77.21, type: "city" },
  { name: "Mumbai",         lat: 19.08, lon: 72.88, type: "city" },
  { name: "Chennai",        lat: 13.08, lon: 80.27, type: "city" },
  { name: "Hyderabad",      lat: 17.38, lon: 78.47, type: "city" },
  { name: "Kolkata",        lat: 22.57, lon: 88.36, type: "city" },
  { name: "Pune",           lat: 18.52, lon: 73.86, type: "city" },
  { name: "Vadodara",       lat: 22.31, lon: 73.18, type: "city" },
  { name: "Ranchi",         lat: 23.34, lon: 85.31, type: "city" },
  { name: "Bhilai",         lat: 21.21, lon: 81.43, type: "city" },
  { name: "Coimbatore",     lat: 11.01, lon: 76.97, type: "city" },
];

/* Reads the computed accent colour from CSS so the dots match the design token */
function getAccentColor() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--color-accent")
    .trim() || "#1d6ef6";
}

export function IndiaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const accent = getAccentColor();

    const map = L.map(containerRef.current, {
      center: [22.5, 78.5],
      zoom: window.innerWidth < 768 ? 3.5 : 4.2,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    /* Carto Positron — clean, minimal, label-light */
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      { subdomains: "abcd", maxZoom: 19 }
    ).addTo(map);

    /* City markers */
    CITIES.forEach(({ name, lat, lon, type }) => {
      const isHQ   = type === "hq";
      const isRegd = type === "regd";
      const radius = isHQ ? 8 : isRegd ? 7 : 5;

      const marker = L.circleMarker([lat, lon], {
        radius,
        fillColor: accent,
        color: "#ffffff",
        weight: isHQ || isRegd ? 2 : 1.5,
        fillOpacity: isHQ ? 1 : isRegd ? 0.85 : 0.6,
      }).addTo(map);

      marker.bindTooltip(name, {
        permanent: isHQ || isRegd,
        direction: isHQ ? "right" : isRegd ? "right" : "top",
        className: "jg-map-tooltip",
        offset: [6, 0],
      });
    });

    mapRef.current = map;

    const handleResize = () => {
      map.setZoom(window.innerWidth < 768 ? 3.5 : 4.2);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Scoped tooltip style — matches site mono font */}
      <style>{`
        .jg-map-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          color: var(--color-foreground);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .jg-map-tooltip::before { display: none !important; }
        .leaflet-container { background: transparent; }
        .leaflet-pane { z-index: auto !important; }
        .leaflet-tile-pane { z-index: 2 !important; }
        .leaflet-overlay-pane { z-index: 3 !important; }
        .leaflet-marker-pane { z-index: 4 !important; }
        .leaflet-tooltip-pane { z-index: 5 !important; }
        .leaflet-popup-pane { z-index: 6 !important; }
      `}</style>
      <div ref={containerRef} className="w-full h-full" />
    </>
  );
}
