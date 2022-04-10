import React from "react";
import Card from "../Card/Card";

// import "./card-list.style.css";

export const CardList = (props: any) => (
  <div className="card-list">
    {props.item.map((inv: any) => (
      <Card key={inv.ID} items={inv}></Card>
    ))}
  </div>
);
