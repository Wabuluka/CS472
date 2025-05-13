import { useCallback, useState } from "react";

export default function HomePage() {
  const [todos, setTodos] = useState(["todo"]);
  const todo = useCallback(() => {
    setTodos((t) => [...t, "New todo"]);
  }, []);
  return (
    <div>
      <h1>hello home page</h1>
      <button onClick={todo}>add</button>
      {todos.map((t, _i) => (
        <div key={_i}>
          <div>{t}</div>
        </div>
      ))}
    </div>
  );
}
