import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, { id: uuidv4(), text: action.payload }],
      };
    case DEL:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

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
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
