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
          <Accordion className="accordion">
            <Accordion.item id="item1" className="accordion-item">
              <Accordion.title title="Item 1" className="accordion-title" />
              <Accordion.content className="accordion-content">
                <p>Content 1</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, adipisci.
                </p>
              </Accordion.content>
            </Accordion.item>

            <Accordion.item id="item2" className="accordion-item">
              <Accordion.title title="Item 2" className="accordion-title" />
              <Accordion.content className="accordion-content">
                <p>Content 2</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <h2>Content</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  nulla, quis incidunt quam magnam reprehenderit assumenda sit
                  sed temporibus iure.
                </p>
              </Accordion.content>
            </Accordion.item>
          </Accordion>
        </div>
      )}
    </div>
  );
}
