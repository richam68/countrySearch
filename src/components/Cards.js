import React from "react";
import "./style.css";

const Cards = ({ flagData }) => {
  return (
    <div className="countryCard">
      {flagData.map((flag, index) => (
        <div className="countryCard_grid" key={index}>
          <img src={flag.flags.png} alt="flag_image" width={50} height={50} />
          <h4>{flag.name.common}</h4>
        </div>
      ))}
    </div>
  );
};

export default Cards;
