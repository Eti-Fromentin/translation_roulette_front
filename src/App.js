import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import InputForm from "./components/input";
import Card from "./components/card";

import "./App.css";
import "../node_modules/@picocss/pico/css/pico.min.css";

function App() {
  const [trads, setTrads] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    trads.length > 10 && setIsLoading(false);
    Aos.init({ duration: 1500 });
  }, [trads]);

  return (
    <div className="App">
      <main className="container">
        <nav>
          <ul>
            <li>
              <strong>Translation Roulette</strong>
            </li>
          </ul>
          <ul></ul>
        </nav>
        <section className="input">
          <InputForm
            trads={trads}
            setTrads={setTrads}
            disabled={disabled}
            setDisabled={setDisabled}
            setIsLoading={setIsLoading}
          />
        </section>
        {isLoading ? (
          <div className="loading" aria-busy="true"></div>
        ) : trads.length ? (
          trads.map((elt, index) => (
            <div data-aos="fade-zoom-in" data-aos-once="false">
              <Card
               
                key={index}
                text={elt.text}
                lang={elt.to}
                translit={elt.transliteration && elt.transliteration.text}
              />
            </div>
          ))
        ) : (
          " "
        )}
      </main>
    </div>
  );
}

export default App;
