import { createContext, useContext } from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  //! Throw an error if the component is not used within AccordionItem
  if (!ctx) {
    throw new Error("AccordionItemContent must be used within AccordionItem");
  }

  return ctx;
}

function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;
