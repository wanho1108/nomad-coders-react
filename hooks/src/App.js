import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};

const ADD = "increment";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { todos: [...state.todos, { text: action.payload }] };
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
        {state.todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
