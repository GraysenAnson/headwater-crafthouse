import React from "react";
import { CategoryHeader } from "../CategoryHeader/categoryHeader";
import { CardList } from "../CardList/cardList";

interface itemProp {
  ID: number;
  Arr_ID: number;
  Order: number;
  Category: string;
  beer_name: string;
  business_name: string;
  State: string;
  ABV: number;
  IBU: number;
  Price: number;
  oz: number;
  Available: string;
  Remaining: string;
  Growler_Fill: string;
  BOTTLE: string;
  CAN: string;
  Image: string;
}

//Change any to its actual type
export const CardContainer = (props: any) => {
  //Sort prop.item by Order ascending, change b - a for decending.
  const orderSort = props.item.sort(function (
    a: { Order: number },
    b: { Order: number }
  ) {
    return a.Order - b.Order;
  });
  return (
    <div>
      <CategoryHeader items={orderSort} />
    </div>
  );
};
