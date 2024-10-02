import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

function AccordionTitle({ className, title }) {
  const { toggleItem } = useAccordionContext();

  const id = useAccordionItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {title}
    </h3>
  );
}

export default AccordionTitle;
