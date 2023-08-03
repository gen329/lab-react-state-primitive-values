import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1)

  function changeScore() {
    setScore(score + incrementor)
  }
  function incrementScore() {
    if (score >= 10) {
      setIncrementor(incrementor + 1);
      setScore(score - 10);
    } else {
      alert("You can't afford that!")
    }
  }
  function reset() {
    setScore(0);
    setIncrementor(1);
  }
  return (
    <main>
      <h1>Current Score:{score}</h1>
      {score >= 100
        ? <div>
            <h2>You Win!</h2>
            <button onClick={ reset }>Play Again?</button>
          </div>
        : <div>
            <button onClick={ changeScore }> +{ incrementor } </button>
            <button onClick={ incrementScore }> Pay 10 points to change from +{ incrementor } to +{ incrementor + 1 } </button>
          </div>
      }
    </main>
  )
}


export default App;
