import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import inv from "./crafthouseData/craftHouse.json";
import Card from "./components/Card/Card";
import { CardList } from "./components/Card List/cardList";

function App() {
  const [item, setItem] = useState(inv);
  return (
    <div>
      Test
      <CardList item={item} />
      {/* <Card item={item} /> */}
    </div>
  );
}

export default App;
