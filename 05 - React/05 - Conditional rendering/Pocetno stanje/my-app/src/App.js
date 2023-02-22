import React from "react";
import ConditionalRendering from "./Components/ConditionalRendering";

function App() {
  const number = 8;

  return (
    <div>
      <ConditionalRendering number={number} />
    </div>
  );
}

export default App;
