import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [even, setEven] = useState("");

  const randomNumber = () => {
    setCount(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    if (count % 2 === 0) {
      setEven("Even");
    } else {
      setEven("Odd");
    }
  }, [count]);

  return (
    <div className="App">
      <div className="container">
        <h1>Count {count}</h1>
        <p>Count is {even}</p>
        <button onClick={randomNumber}>Increment</button>
        <div className="footer">
          *Increase By Random Number Between 0 to 100
        </div>
      </div>
    </div>
  );
}

export default App;
