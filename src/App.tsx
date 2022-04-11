import React, { useState } from "react";
import "./App.css";
import inv from "./crafthouseData/craftHouse.json";
import { CardList } from "./components/CardList/cardList";
import { CategoryHeader } from "./components/CategoryHeader/categoryHeader";
import { CardContainer } from "./components/CardContainer/cardContainer";

function App() {
  const [item, setItem] = useState(inv);
  return (
    <div>
      Craft House App
      <CardContainer item={item} />
    </div>
  );
}

export default App;
