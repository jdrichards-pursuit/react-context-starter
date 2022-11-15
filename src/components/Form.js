import { useState } from "react";
//This is how I import and consume the context if I want to use the custom hook from LanguageContext
import { useLanguage } from "../context/LanguageContext";

//the NavBar which is singly nested in the App.js can consume the context. Meanwhile so can this deeply next Form.js component
export default function Form() {
  // destructure and consume only the data, state or functions that I need from the component
  const { language, setLanguage, english, french } = useLanguage();

  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { greeting, instruction, select, firstName, lastName, button } =
    language === "english" ? english : french;

  return (
    <>
      <h1>{greeting} 😃!</h1>
      <h2>
        {select} <span onClick={() => setLanguage("french")}>FR</span> |
        <span onClick={() => setLanguage("english")}>EN</span>
      </h2>
      <p>{instruction}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={firstName}
          value={nameOne}
          onChange={(e) => setNameOne(e.target.value)}
        />
        <input
          type="text"
          placeholder={lastName}
          value={nameTwo}
          onChange={(e) => setNameTwo(e.target.value)}
        />
        <button type="submit">{button}</button>
      </form>
    </>
  );
}
