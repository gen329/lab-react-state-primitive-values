import { useState } from "react";
import "./App.css";

function App () {
  const [mode, setMode] = useState();

  function currentScore() {};

    return (
        <>  
      <main>
        <p>React State Lab</p>
      </main>
      <CurrentScore />
      <VictoryScreen />
      </>
    );
}

export default App;
