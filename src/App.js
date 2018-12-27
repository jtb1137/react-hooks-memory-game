import React, { useState } from "react";
import "./App.css";

import Card from "./components/Card";

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const handleClick = id => setFlipped(id);

  return (
    <div className='App'>
      <Card
        id={1}
        width={100}
        height={100}
        back={"/images/back.png"}
        front={"/images/react.png"}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}
