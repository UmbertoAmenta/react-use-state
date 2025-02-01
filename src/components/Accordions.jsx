import languages from "../data/languages";

export default function Accordions() {
  return (
    <div className="accordionList">
      {languages.map((language) => {
        return (
          <div key={language.id} className="accordion">
            <div>
              <h3>{language.title}</h3>
              <button>+</button>
            </div>
            <div>
              <p>{language.description} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
