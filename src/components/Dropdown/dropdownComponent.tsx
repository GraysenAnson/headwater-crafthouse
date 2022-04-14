import React, { useState } from "react";
import { ItemProp, InvItem } from "../Interfaces/interfaces";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import {CategoryHeader, SortedCategoryHeader} from "../CategoryHeader/categoryHeader";

export const DropdownComponent = (props: ItemProp) => {
  const categoryObj: String[] = [];
  const [value,setValue]=useState('');
  const orderSort = props.item.sort(function (
    a: { Order: number },
    b: { Order: number }
  ) {
    return a.Order - b.Order;
  });

  const handleSelect=(e: any)=>{
    console.log(e);
    setValue(e);
    if (e !== "All") {
      // <SortedCategoryHeader item={props.item}/>
    } else {
      // return (<CategoryHeader item={orderSort} />);
    }
  };
  
  const sortedCategory = orderSort.map((inv: InvItem) => {
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
      return <Dropdown.Item eventKey={inv.Category}>{inv.Category}</Dropdown.Item>;
    }
    return false;
  });

  if(value !== "") {
    return (<SortedCategoryHeader item={orderSort.filter(
      (x: InvItem) => x.Category === value
    )} />);
  }

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={handleSelect}>
      <Dropdown.Item value="All" eventKey="All">All</Dropdown.Item>
        {sortedCategory}
      </DropdownButton>
      {/* <CategoryHeader item={orderSort} /> */}
    </div>
  );
};
