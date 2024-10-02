import { createContext, useState, useContext } from "react";

const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);

  const setMapInstance = (map) => {
    setMap(map);
  };

  const values = {
    map,
    setMapInstance,
  };

  return <MapContext.Provider value={values}>{children}</MapContext.Provider>;
};

//! Custom hook to use the MapContext
export const useMapContext = () => {
  return useContext(MapContext);
};
