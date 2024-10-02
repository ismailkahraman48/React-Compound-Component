import { createContext, useContext, useState } from "react";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  //! Throw an error if the component is not used within Accordion
  if (!ctx) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    console.log(id);
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.item = AccordionItem;
Accordion.title = AccordionTitle;
Accordion.content = AccordionContent;
