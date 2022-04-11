import React from "react";
import Card from "../Card/Card";
// import "./card-list.style.css";

export const CardList = (props: any) => (
  <div className="card-list" key={props.items}>
    {/* {console.log(props.items)} */}
    {props.items.map((inv: any) => (
      <>
        <div>
          <Card key={inv.ID} items={inv}></Card>
        </div>
      </>
    ))}
  </div>
);
