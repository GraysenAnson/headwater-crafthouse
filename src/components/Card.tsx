import React from "react";

const Card = ({ item }: any) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val: any) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.ID}
              >
                <div className="card-img-top text-center">
                  <img
                    src={Val.Image}
                    alt={Val.beer_name}
                    className="photo w-75"
                  />
                </div>
                <div className="card-continer">
                  <div className="card-title fw-bold fs-4">
                    {Val.Category} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.beer_name}
                  </div>
                  {/* <div className="card-text">{Val.desc}</div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Card;
