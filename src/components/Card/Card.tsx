import React from "react";
import { InvItem } from "../Interfaces/interfaces";

interface CardProps {
  item: InvItem;
}
 
const Card = (props: CardProps) => (
  <div className="card-continer">
    <h3>
      {props.item.ID +
        " " +
        props.item.beer_name +
        " -- " +
        props.item.business_name +
        "-" +
        props.item.State}
    </h3>
    <img alt={props.item.beer_name} src={``} />
    <p>
      ABV - {props.item.ABV} IBU - {props.item.IBU} Price - {props.item.Price}/{props.item.oz}oz
    </p>
  </div>
);

export default Card;
