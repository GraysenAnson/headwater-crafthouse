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

let cNum = 0;
const categoryObj: Array<{
  Category: string
}> = [];

//Change any to its actual type
export const CardContainer = (props: any) => {

  //Sort by Order ascending, change b - a for decending.
  const orderSort = props.item.sort(function(a: {Order: number}, b: {Order: number}){
    return a.Order - b.Order;
  });

  orderSort.map((inv: any) => {

    //Store unique categories into categoryObj Array.
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
    }

    //Set Category to Header component
    //Set first cardList object, otherwise it would bypass first card object in first render.
    if (categoryObj[cNum] === inv.Category) {
      cNum++;
      return (
        <div key={inv.Category}>
          <CategoryHeader key={inv.business_name} items={inv} />
          <CardList key={inv.Arr_ID} items={inv} />
        </div>
      );
    } else {
      //Second render of object will paste the next values
      return (
        <div key={inv.beer_name}>
          <CardList key={inv.order} items={inv} />
        </div>
      );
    }
  }
  )
  return (<div>Test</div>);
};
