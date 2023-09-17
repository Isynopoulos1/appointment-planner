import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ data, type }) => {
  console.log(data, type);

  return data ? (
    <ul>
      {data?.map((item, index) => (
        <Tile key={index} index={index + 1} type={type} {...item} />
      ))}
    </ul>
  ) : (
    <p>No {type} available</p>
  );
};

export default TileList;
