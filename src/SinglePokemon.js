import React from "react";

const SinglePokemon = ({ imgUrl, name, number, type1, type2 }) => {
  return (
    <div>
      <img src={imgUrl} />
      <p>
        <b>Name:</b> {name}{" "}
      </p>
      <p>
        <b>Number:</b> {number}{" "}
      </p>
      <p>
        <b>Type 1:</b> {type1}{" "}
      </p>
      <p>
        <b>Type 2:</b> {type2}{" "}
      </p>
    </div>
  );
};

export default SinglePokemon;
