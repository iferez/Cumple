import "./App.css";
import Countdown from "./components/Countdown";
import Welcome from "./components/Welcome";
import React, { useState } from "react";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleTimerEnd = () => {
    setShowMainContent(true);
  };

  return (
    <div className="App">
      <Welcome onTimerEnd={handleTimerEnd} />
      {showMainContent && <Countdown />}
    </div>
  );
}

export default App;
