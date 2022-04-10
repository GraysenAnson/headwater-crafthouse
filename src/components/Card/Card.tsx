import React from "react";

export const Card = (props: any) => (
  <div className="card-continer">
    {/* <a
      href={`${props.}`}
      target="_blank"
      rel="noreferrer"
    > */}
    <img alt="Sale Items" src={`${props.items.Image}`} />
    <h2>{props.items.beer_name + " -- " + props.items.business_name}</h2>
    {/* </a> */}
  </div>
);

export default Card;
