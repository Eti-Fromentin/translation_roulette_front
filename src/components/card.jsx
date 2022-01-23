import React from "react";

function Card({ lang, text, translit }) {

  return (
    <article>
      <header className="cardHeader">{lang}</header>
      {text}
      <footer className="cardFooter">{translit} </footer>
    </article>
  );
}

export default Card;
