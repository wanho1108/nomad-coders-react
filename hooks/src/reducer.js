import { v4 as uuidv4 } from "uuid";

export const initialState = {
  todos: [],
  completed: [],
};

export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: action.payload }],
      };
    case DEL:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE:
      const completeTarget = state.todos.find(
        (todo) => todo.id === action.payload
      );

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        completed: [...state.completed, completeTarget],
      };
    case UNCOMPLETE:
      const uncompleteTarget = state.completed.find(
        (todo) => todo.id === action.payload
      );

      return {
        ...state,
        todos: [...state.todos, uncompleteTarget],
        completed: state.completed.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

export default reducer;
