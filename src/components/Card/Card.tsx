import React from "react";

const Card = (props: any) => (
  <div className="card-continer">
    <h2>
      {props.items.beer_name +
        " -- " +
        props.items.business_name +
        "-" +
        props.items.State}
    </h2>
    <img alt={props.items.beer_name} src={`${props.items.Image}`} />
    <p>
      ABV - {props.items.ABV} IBU - {props.items.IBU} Price -{" "}
      {props.items.Price}/{props.items.oz}oz
    </p>
    <p></p>
  </div>
);

export default Card;
