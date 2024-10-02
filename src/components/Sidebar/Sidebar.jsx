import "./Sidebar.css";
import { FaBars } from "react-icons/fa";
import Accordion from "@components/Accordion/Accordion";
import { useComponentContext } from "@contexts/ComponentContext";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useComponentContext();

  return (
    <div
      className="sidebar"
      style={{
        width: isSidebarOpen ? "250px" : "50px",
      }}
    >
      <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" }} />
      {isSidebarOpen && (
        <div>
          <Accordion>
            <h3>Accordion title</h3>
          </Accordion>
        </div>
      )}
    </div>
  );
}
