import React from "react";
import Add from "./Add";
import List from "./List";
import { useState } from "../context";
import Todo from "./Todo";

function App() {
  const { todos, completed } = useState();

  return (
    <>
      <h1>Todos</h1>
      <Add />
      <List name="Todo">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={false}
          />
        ))}
      </List>
      {completed.length > 0 && (
        <List name="Todo Completed">
          {completed.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={true}
            />
          ))}
        </List>
      )}
    </>
  );
}

export default App;
