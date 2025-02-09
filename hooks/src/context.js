import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(TodoContext);
  return dispatch;
};

// export const useTodo = () => {
//   const {
//     state: { todos },
//   } = useContext(TodoContext);
//   return todos;
// };

// export const useCompleted = () => {
//   const {
//     state: { completed },
//   } = useContext(TodoContext);
//   return completed;
// };

export const useState = () => {
  const { state } = useContext(TodoContext);
  return state;
};

export default TodoProvider;
