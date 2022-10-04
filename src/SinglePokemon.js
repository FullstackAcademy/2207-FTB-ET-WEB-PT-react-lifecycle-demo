import React from "react";

const SinglePokemon = ({ imgUrl, name, number, type1, type2 }) => {
  return (
    <div>
      <img src={imgUrl} />
      <h2>{name}</h2>
      <br />
      <b>{name}</b>
      <br />
      <b>{number}</b>
      <br />
      <b>{type1}</b>
      <br />
      <b>{type2}</b>
      <br />
    </div>
  );
};

export default SinglePokemon;
