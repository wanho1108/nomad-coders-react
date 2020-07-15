import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default () => {
  const [newTodo, setNewTodo] = useState();
  const dispatch = useDispatch();
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
    <form>
      <input
        type="text"
        placeholder="Add todo"
        onChange={onChange}
        value={newTodo}
      />
      <button onClick={onSubmit}>Add</button>
    </form>
  );
};
