import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang = ({ children, defaultLang, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = (text) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  return (
    <LangContext.Provider value={{ setLang, hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const UseHyperTranslate = () => {
  const { hyperTranslate } = useContext(LangContext);
  return hyperTranslate;
};

export default Lang;
