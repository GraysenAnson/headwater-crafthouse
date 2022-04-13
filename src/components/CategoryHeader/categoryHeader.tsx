import React from "react";
import { CardList } from "../CardList/cardList";
import { ItemProp, InvItem } from "../Interfaces/interfaces";

export const CategoryHeader = (props: ItemProp) => {
  const categoryObj: String[] = [];
  const categorySorter = props.item.map((inv: InvItem) => {
    //Store unique categories, filter by category to return inventory items.
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
      return (
        <div>
          <h1>{inv.Category}</h1>
          <CardList
            item={props.item.filter(
              (x: InvItem) => x.Category === inv.Category
            )}
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
