import React, { useState } from "react";
import "./App.css";
import inv from "./crafthouseData/craftHouse.json";
import { CardContainer } from "./components/CardContainer/cardContainer";
import { BackToTop } from "./components/Page-Navigation/backToTop";

function App() {
  const [item, setItem] = useState(inv);
  return (
    <div>
      Craft House App
      <BackToTop />
      <CardContainer item={item} />
    </div>
  );
}

export default App;
