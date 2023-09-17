import React from "react";

export const Tile = ({ index, type, ...props }) => {
  const isData = props && Array.isArray(Object.entries(props));
  if (!isData) {
    return <div>There is no {type} available</div>;
  }

  return (
    <div className="tile-container">
      <h2>
        {type} Number {index}
      </h2>
      {Object.entries(props)?.map((el, i) => (
        <p className="tile-title" key={i}>
          {el[0]}: <strong>{el[1]}</strong>
        </p>
      ))}
    </div>
  );
};

export default Tile;
