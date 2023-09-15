import React from "react";

export const Tile = ({ data }) => {
  let valuesArray = [];

  if (typeof data === "object" && data !== null) {
    valuesArray = Object.values(data);
    console.log("values", valuesArray);
  }

  return (
    <div className="tile-container">
      {valuesArray.map((item, index) => (
        <p className="tile-title" key={index} name={item}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Tile;
