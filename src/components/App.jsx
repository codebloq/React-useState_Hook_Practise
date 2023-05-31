import React, { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  //Call method to re-run function to update
  setInterval(updateTime, 1000);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
