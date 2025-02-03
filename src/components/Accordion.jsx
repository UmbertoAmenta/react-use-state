import { useState } from "react";

export default function Accordion({
  id,
  title,
  description,
  isOpen,
  onAccordToggle,
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    return setIsOpen((current) => !current);
  };

  return (
    <div key={id} className="accordion">
      <div className={isOpen ? "accordionOpen" : "accordionClosed"}>
        <h3>{title}</h3>
        <button onClick={onAccordToggle}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && (
        <div>
          <p>{description} </p>
        </div>
      )}
    </div>
  );
}
