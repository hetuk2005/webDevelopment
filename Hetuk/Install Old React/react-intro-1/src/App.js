import "./App.css";

function App() {
  let count = 0;

  const handleIncre = () => {
    count++;
    document.getElementById("counter").innerText = `Counter  ${count}`;
  };

  const handleDecre = () => {
    count--;
    document.getElementById("counter").innerText = `Counter  ${count}`;
  };

  return (
    <>
      <h4>Hello</h4>
      <h1 id="counter">Counter {count}</h1>
      <button onClick={handleIncre}>+</button>
      <button onClick={handleDecre}>-</button>
    </>
  );
}

export default App;
