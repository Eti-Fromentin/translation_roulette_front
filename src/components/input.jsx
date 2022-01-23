import React, { useState } from "react";
import axios from "axios";
import style from "../style/input.module.css";

function InputForm({ trads, setTrads, disabled, setDisabled, setIsLoading }) {
  //   const URL = process.env.URL;
  const [text, setText] = useState("");
  const [error, setError] = useState(null);


  async function handleSubmit(e) {
    e.preventDefault();
    setTrads([]);
    setDisabled(true);
    setIsLoading(true);
    setTimeout(() => {
      setDisabled(false);
      setIsLoading(false);
    }, 10000);
    try {
      await submitForm(text);
    } catch (err) {
      setError(err);
      setDisabled(false);
    }
  }

  function handleTextareaChange(e) {
    setText(e.target.value);
  }

  async function submitForm() {
    const result = await axios.post("http://localhost:8000/api/random/", {
      text: text,
      number: 15,
    });
    setTrads(result.data);
  }

  return (
    <div className={style.inputContainer}>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleTextareaChange}
          disabled={disabled}
          placeholder="Ecrivez le texte que vous désirez traduire"
        />
        <br />
        <button disabled={!text.length || disabled}>Traduire le texte</button>
        {error && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
}

export default InputForm;
