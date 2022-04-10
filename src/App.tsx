import React, { useState } from "react";
import "./App.css";
import inv from "./crafthouseData/craftHouse.json";
import { CardList } from "./components/Card List/cardList";

function App() {
  const [item, setItem] = useState(inv);
  return (
    <div>
      Test
      <CardList item={item} />
    </div>
  );
}

export default App;
