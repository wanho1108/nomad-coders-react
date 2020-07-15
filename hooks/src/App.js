import React from "react";
import Add from "./Add";

function App() {
  return (
    <>
      <h1>Todos</h1>
      <Add />
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              type="button"
              onClick={() => dispatch({ type: DEL, payload: todo.id })}
            >
              <span role="img" aria-label="Delete">
                ❌
              </span>
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: COMPLETE, payload: todo.id })}
            >
              <span role="img" aria-label="Complete">
                ✔
              </span>
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {state.completed.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              type="button"
              onClick={() => dispatch({ type: DEL, payload: todo.id })}
            >
              <span role="img" aria-label="Delete">
                ❌
              </span>
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: UNCOMPLETE, payload: todo.id })}
            >
              <span role="img" aria-label="UnComplete">
                ✔❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
