import React from "react";
import "./style.css";

const Cards = ({ flagData }) => {
  return (
    <div className="countryCard">
    <img src={flagData.flags.png} alt="flag_image" width={50} height={50} />
    <h2>{flagData.name.common}</h2>
</div>
  );
};

export default Cards;
