import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data ? (
        data.map((item, index) => (
          <Tile key={index} name={item.name} {...item} />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default TileList;
