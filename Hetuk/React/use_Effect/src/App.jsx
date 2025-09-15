import React from 'react'
import './App.css'

export function App() {

  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(10);

  React.useEffect(() => {
    console.log("Without Dependency: ", count);
  });

  React.useEffect(() => {
    console.log("Empty Dependency: ", count);
  }, []);
  
  React.useEffect(() => {
    console.log("With Dependency: ", count2);
  }, [count2]);

  return (
    <>
      <h1>count_1 { count}</h1>
      <h1>count_2 { count2}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount2((prev) => prev - 1)}>count2 decrement</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>count2 increment</button>
    </>
  );
};
