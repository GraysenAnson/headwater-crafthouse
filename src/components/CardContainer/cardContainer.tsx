import React from "react";
import { CategoryHeader } from "../CategoryHeader/categoryHeader";
import { CardList } from "../CardList/cardList";

let num = 0;
let cNum = 0;
let categoryObj: any = [];
let invObj: any = [];

export const CardContainer = (props: any) =>  
  props.item.map((inv: any) => {
    //Sort by Order in json - ascending, change b - a for decending.
    const sorted = props.item.sort(function(a: any, b: any){
      return a.Order - b.Order;
    });

    //Store unique categories into categoryObj Array.
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
    }

    if (categoryObj[num] === inv.Category) {
        num++;
    } 

    //Set Category to Header component
    if (categoryObj[cNum] === inv.Category) {
      cNum++;
      return (
        <div key={inv.ID}>
          <CategoryHeader key={cNum} items={inv} />
          <CardList key={inv.ID} items={inv} />
        </div>
      );
    }
    
    return (
      <div>
        <CardList key={inv.ID} items={inv} />
      </div>
    );
  });
