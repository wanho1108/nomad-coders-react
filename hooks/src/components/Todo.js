import React from "react";
import { DEL, COMPLETE, UNCOMPLETE } from "../actions";
import { useDispatch } from "../context";

export default ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {text}
      <button
        type="button"
        onClick={() => dispatch({ type: DEL, payload: id })}
      >
        <span role="img" aria-label="Delete">
          ❌
        </span>
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        <span role="img" aria-label={isCompleted ? "UnComplete" : "Complete"}>
          {isCompleted ? "✔❌" : "✔"}
        </span>
      </button>
    </li>
  );
};
