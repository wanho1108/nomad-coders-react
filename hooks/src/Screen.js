import React from "react";
import { useSetLang, UseHyperTranslate } from "./context";

const Screen = () => {
  const setLang = useSetLang();
  const hyperTranslate = UseHyperTranslate();

  return (
    <>
      <h1>{hyperTranslate("Hello!")}</h1>
      <button onClick={() => setLang("es")}>
        {hyperTranslate("Translate")}
      </button>
    </>
  );
};

export default Screen;
