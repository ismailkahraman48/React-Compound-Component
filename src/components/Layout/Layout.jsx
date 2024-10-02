import "./Layout.css";
import Map from "@components/Map/Map";
import Sidebar from "@components/Sidebar/Sidebar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default Layout;
