import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import inv from "./crafthouseData/craftHouse.json";
import Card from "./components/Card";

function App() {
  const [item, setItem] = useState(inv);

  // const apple = a.map((val) => {
  //   if (val.ID === 1) {
  //     console.log(val.ID);
  //   }
  //   return val.ID + " ";
  // });
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      Test
      <Card item={item} />
    </div>
  );
}

export default App;
