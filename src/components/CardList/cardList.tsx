import React from "react";
import Card from "../Card/Card";
// import "./card-list.style.css";
import { ItemProp, InvItem } from "../Interfaces/interfaces";

export const CardList = (props: ItemProp) => {
  const invItems = props.item.map((inv: InvItem) => {
    return <div>{<Card item={inv}></Card> }</div>;
  });
  return <div>{invItems}</div>;
};
