import { useState, createContext, useContext, Component } from "react";
import { french, english } from "../data/languages";

//instead of lifting state to App.js and threading so deeply into the components, I can create a context. That way. Any component I choose can simply grab the information from context and consume it without prop threading.

//creates context object
export const LanguageContext = createContext();

//if I don't want to import what's on line 10 every time I can create a custom hook
// saves a few lines.
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// wrapper component
export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("french");

  // state, functions, fetches can all go inside your wrapper Component. But only place the state that you will need in deeply nested functions as well as anything that depends on instanceof.

  // the value prop must be called 'value' and is the one attribute/prop of the Provider. It always takes an object. This is how you pass the data, functions etc to the the context object.
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, french, english }}
    >
      {/* render whatever I put inside the opening and closing of this Provider */}
      {props.children}
    </LanguageContext.Provider>
  );
};
