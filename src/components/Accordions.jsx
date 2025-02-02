import languages from "../data/languages";
import Accordion from "./Accordion";

export default function Accordions() {
  return (
    <div className="accordionList">
      {languages.map((language) => {
        return (
          <Accordion
            key={language.id}
            title={language.title}
            description={language.description}
          />
        );
      })}
    </div>
  );
}
