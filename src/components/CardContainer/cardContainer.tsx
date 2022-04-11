import React from "react";
import { CategoryHeader } from "../CategoryHeader/categoryHeader";
import { CardList } from "../CardList/cardList";

let num = 0;
let cNum = 0;
let categoryObj: any = [];
let invObj: any = [];
export const CardContainer = (props: any) =>
  props.item.map((inv: any) => {
    //TODO: Needs to sort by inv.Order to display it correctly
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
    }

    //Set Category to Header
    if (categoryObj[cNum] === inv.Category) {
      cNum++;
      return (
        <div key={inv.ID}>
          <CategoryHeader key={cNum} items={inv} />
        </div>
      );
    }

    //If category array ID == prop array ID
    // console.log(categoryObj[num] + " " + inv.Category);
    // if (categoryObj[num] !== inv.Category) {
    //   // console.log();
    //   //   invObj.push(inv);
    //   //   return <div>{<CardList items={invObj} />}</div>;
    // } else {
    //   //   console.log(" else statement " + inv.beer_name);
    //   //   num++;
    //   //   invObj = [];
    //   // console.log(invObj);
    // }
    return (
      <div>
        <CardList key={inv.ID} items={props.item} />
      </div>
    );
  });
