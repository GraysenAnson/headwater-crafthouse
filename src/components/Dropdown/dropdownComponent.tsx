import React from "react";
import { ItemProp, InvItem } from "../Interfaces/interfaces";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";

interface IdropdownItem {
  id: number;
  text: string;
}

export const DropdownComponent = (props: ItemProp) => {
  const categoryObj: String[] = [];
  const orderSort = props.item.sort(function (
    a: { Order: number },
    b: { Order: number }
  ) {
    return a.Order - b.Order;
  });
  const sortedCategory = orderSort.map((inv: InvItem) => {
    if (categoryObj.indexOf(inv.Category) === -1) {
      categoryObj.push(inv.Category);
      return <Dropdown.Item href="#/action-1">{inv.Category}</Dropdown.Item>;
    }
    return false;
  });
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {sortedCategory}
      </DropdownButton>
    </div>
  );
};
