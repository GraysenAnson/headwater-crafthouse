import React from "react";
import { CategoryHeader } from "../CategoryHeader/categoryHeader";
import { ItemProp } from "../Interfaces/interfaces";

export const CardContainer = (props: ItemProp) => {
  //Sort prop.item by Order ascending, change b - a for decending.
  const orderSort = props.item.sort(function (
    a: { Order: number },
    b: { Order: number }
  ) {
    return a.Order - b.Order;
  });
  return (
    <div>
      <CategoryHeader item={orderSort} />
    </div>
  );
};
