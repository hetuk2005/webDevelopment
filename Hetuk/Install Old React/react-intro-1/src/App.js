import React from "react";
import "./App.css";

import Hello from "./useRef";

function App() {
  // let count = 0;

  let [count, setCount] = React.useState(0);

  const handleIncre = () => {
    setCount((add) => add + 1);
    // count++;
    // document.getElementById("counter").innerText = `Counter  ${count}`;
  };

  const handleDecre = () => {
    setCount((prev) => prev - 1);
    // count--;
    // document.getElementById("counter").innerText = `Counter  ${count}`;
  };

  return (
    <>
      <h1 id="counter">Counter {count}</h1>
      <button disabled={count === 10} onClick={handleIncre}>
        +
      </button>
      <button disabled={count <= 0} onClick={handleDecre}>
        -
      </button>
      <Hello />
    </>
  );
}

export default App;
