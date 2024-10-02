import "./App.css";
import Layout from "./components/Layout/Layout";
import { ComponentProvider } from "./contexts/ComponentContext";
import { MapProvider } from "./contexts/MapContext";

function App() {
  return (
    <ComponentProvider>
      <MapProvider>
        <Layout />
      </MapProvider>
    </ComponentProvider>
  );
}

export default App;
