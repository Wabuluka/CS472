import { useState } from "react";
import "./App.css";
import CounterTextComponent from "./CounterTextComponent";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setCounter(() => counter + 1)}>+1</button>
        <CounterTextComponent counter={counter} />
        <button onClick={() => setCounter(() => counter - 1)}>-1</button>
      </div>
    </>
  );
}

export default App;
