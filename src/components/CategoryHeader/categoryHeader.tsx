import React from "react";
import { CardList } from "../CardList/cardList";

export const CategoryHeader = (props: any) => {
  // console.log("Header");
  const categoryObj: String[] = [];

  const categorySorter = props.items.map((inv: any) => {
    //Store unique categories into categoryObj Array.
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
      return (
        <div>
          <h1>{inv.Category}</h1>
          <CardList
            items={props.items.filter((x: any) => x.Category === inv.Category)}
          />
        </div>
      );
    }
  });
  return (
    <div className="category-header-container">
      <h1>{categorySorter}</h1>
    </div>
  );
};
