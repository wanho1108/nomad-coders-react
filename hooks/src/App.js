import React, { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE,
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newTodo });
    setNewTodo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTodo(value);
  };

  return (
    <>
      <h1>Todos</h1>
      <form>
        <input
          type="text"
          placeholder="Add todo"
          onChange={onChange}
          value={newTodo}
        />
        <button onClick={onSubmit}>Add</button>
      </form>
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
