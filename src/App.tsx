import React, { useState } from "react";
import "./App.css";
import inv from "./crafthouseData/craftHouse.json";
import { CardContainer } from "./components/CardContainer/cardContainer";
import { NavigationBtn } from "./components/Page-Navigation/backToTop";

function App() {
  const [item, setItem] = useState(inv);
  return (
    <div>
      Craft House App
      <NavigationBtn/>
      <CardContainer item={item} />
    </div>
  );
}

export default App;
