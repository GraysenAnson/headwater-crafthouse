import React from "react";
import Card from "../Card/Card";
// import "./card-list.style.css";

export const CardList = (props: any) => {
  // console.log(props.items);
  const invItems = props.items.map((inv: any) => {
    console.log(inv);
    return (
      <div>
        <Card items={inv}></Card>
      </div>
    );
  });
  return <div>{invItems}</div>;
};
