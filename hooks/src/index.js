import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TodoProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
