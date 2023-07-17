import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by{" "}
            <a
              href="https://willowy-centaur-da4a04.netlify.app/"
              target="_blank"
              rel="noreferrer">
              Claire Pasquiou
            </a>{" "}
            using REACT and is open-sourced on{" "}
            <a
              href="https://github.com/ClairePasquiou/dictionary-project"
              target="_blank"
              rel="noreferrer">
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://thriving-cranachan-528aa1.netlify.app/"
              target="_blank"
              rel="noreferrer">
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
