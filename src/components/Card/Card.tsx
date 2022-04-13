import React from "react";
import { ItemProp, InvItem } from "../Interfaces/interfaces";

const Card = (props: InvItem) => (
  <div className="card-continer">
    <h3>
      {props.ID +
        " " +
        props.beer_name +
        " -- " +
        props.business_name +
        "-" +
        props.State}
    </h3>
    <img alt={props.beer_name} src={``} />
    <p>
      ABV - {props.ABV} IBU - {props.IBU} Price - {props.Price}/{props.oz}oz
    </p>
    <p></p>
  </div>
);

export default Card;
