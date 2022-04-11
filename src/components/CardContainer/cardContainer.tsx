import React from "react";
import { CategoryHeader } from "../CategoryHeader/categoryHeader";
import { CardList } from "../CardList/cardList";

let cNum = 0;
const categoryObj: any = [];

export const CardContainer = (props: any) =>  
  props.item.map((inv: any) => {
    //Sort by Order in json - ascending, change b - a for decending.
    props.item.sort(function(a: any, b: any){
      return a.Order - b.Order;
    });

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
  });
