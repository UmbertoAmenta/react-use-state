import languages from "../data/languages";
import Accordion from "./Accordion";
import { useState } from "react";

export default function Accordions() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handlerAccordion = (id) => {
    setActiveAccordion((currentId) => {
      if (currentId === id) {
        return null;
      }
      return id;
    });
  };

  return (
    <div className="accordionList">
      {languages.map(({ id, title, description }) => {
        return (
          <Accordion
            key={id}
            title={title}
            description={description}
            isOpen={id === activeAccordion}
            onAccordToggle={() => handlerAccordion(id)}
          />
        );
      })}
    </div>
  );
}
