import React from "react";
import Card from "../Card/Card";
// import "./card-list.style.css";

export const CardList = (props: any) => (
  <div>
    <Card key={props.items.Arr_ID} items={props.items}></Card>
  </div>
);
