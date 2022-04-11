import React from "react";
import Card from "../Card/Card";
// import "./card-list.style.css";

export const CardList = (props: any) => (
  <div>
    <Card items={props.items}></Card>
  </div>
);
