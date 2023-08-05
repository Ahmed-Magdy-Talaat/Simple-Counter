import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="main">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div className="container">
          <button onClick={() => setCounter((s) => s + 1)}>+</button>
          <button onClick={() => setCounter((s) => s - 1)}>-</button>
          <button onClick={() => setCounter((s) => (s = 0))}>Res</button>
        </div>
      </div>
    </div>
  );
}

export default App;
