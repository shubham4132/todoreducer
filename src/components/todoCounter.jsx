import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export default function TodoCounter() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        onClick={() => {
          if (input && !todos.includes(input)) {
            dispatch({ type: "todos/added", payload: input });
          }
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() =>
                dispatch({ type: "todos/removed", payload: index })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
