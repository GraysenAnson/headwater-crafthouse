import React from "react";

const Card = (props: any) => (
  <div className="card-continer">
    <h3>
      {props.items.ID +
        " " +
        props.items.beer_name +
        " -- " +
        props.items.business_name +
        "-" +
        props.items.State}
    </h3>
    <img alt={props.items.beer_name} src={``} />
    <p>
      ABV - {props.items.ABV} IBU - {props.items.IBU} Price -{" "}
      {props.items.Price}/{props.items.oz}oz
    </p>
    <p></p>
  </div>
);

export default Card;
