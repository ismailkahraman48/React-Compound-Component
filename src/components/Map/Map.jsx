import "./Map.css";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { useMapContext } from "@contexts/MapContext";
import { useComponentContext } from "@contexts/ComponentContext";

function Map() {
  const mapContainer = useRef(null);
  const { map, setMapInstance } = useMapContext();
  const { isSidebarOpen } = useComponentContext();

  //! Initialize the map
  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json",
      center: [29.0, 41.0],
      zoom: 5,
    });
    map.on("load", () => {
      setMapInstance(map);
    });

    () => {
      map.remove();
    };
  }, []);

  //! Update the map padding when the sidebar is opened or closed
  useEffect(() => {
    if (map) {
      // map.resize();
      // map.easeTo({
      //   padding: { left: isSidebarOpen ? 0 : 0, top: 0, right: 300, bottom: 0 },
      // });
    }
  }, [isSidebarOpen]);

  return <div ref={mapContainer} className="map" />;
}

export default Map;
