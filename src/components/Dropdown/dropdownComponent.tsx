import React, { useState } from "react";
import { ItemProp, InvItem } from "../Interfaces/interfaces";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import {CategoryHeader, SortedCategoryHeader} from "../CategoryHeader/categoryHeader";
import { CardContainer } from "../CardContainer/cardContainer";

export const DropdownComponent = (props: ItemProp) => {
  const categoryObj: String[] = [];
  const [value,setValue]=useState('');
  const orderSort = props.item.sort(function (
    a: { Order: number },
    b: { Order: number }
  ) {
    return a.Order - b.Order;
  });

  //Any is not an acceptible type for "e" and needs to be replaced.
  const handleSelect=(e: any) =>{
    setValue(e);
  };
  
  const sortedCategory = orderSort.map((inv: InvItem) => {
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
      return <Dropdown.Item eventKey={inv.Category}>{inv.Category}</Dropdown.Item>;
    }
    return false;
  });

  function setInventoryValues(val: string) {
    const elem = document.getElementById("cardContainer");
    if(elem && elem.parentNode) {
      //Somewhat works. Needs improvements
      elem.parentNode.removeChild(elem);
    }
    console.log(val);
    if(val === "All") {
      return (<CardContainer item={orderSort}/>);
    } else if(val !== ""){
      return (<CardContainer item={orderSort.filter(
        (x: InvItem) => x.Category === val
      )} />);
    } else {
      console.log("I'm empty loaded");
    }
  };
  

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={handleSelect}>
      <Dropdown.Item value="All" eventKey="All">All</Dropdown.Item>
        {sortedCategory}
      </DropdownButton>
      {setInventoryValues(value)}
    </div>
  );
};
