import React, { useState, useEffect } from "react";
import SinglePokemon from "./SinglePokemon";

const Pokemon = () => {
  // state allows us to manage data that is changing in our react app
  // we are retriving data from our backend/server our data is an array of pokemon
  // this tells us that our initial state of pokemon is an empty array
  const [pokemon, setPokemon] = useState([]);

  /* 
  How to write a the useEffect hook 
  1. import the useEffect hook from react 
  2. useEffect takes in a few arguments
     --> first one is a function
     --> second one is optional, and this changes the behavior in how useEffect is used
  3. The second argument is a dependency list  
  */

  // On every render --> if we don't include a second arguement this useEffect will run on every new render/load
  useEffect(() => {
    console.log("I re-rerended");
  });

  // On the first Render/Mount Only this will load with an empty dependency array as the second argument
  // We use this whenever we want to fetch data from the backend initially
  // We want this to run when the page initially loads only once
  useEffect(() => {
    const fetchPokemon = async () => {
      // fetch the pokemon sort by id in descending order
      const response = await fetch(
        `http://localhost:5000/pokemon?_sort=id&_order=desc`
      );
      const data = await response.json();
      console.log("data", data);
      // Update our state with our setter function
      setPokemon(data);
    };
    // call our fetch pokemon
    fetchPokemon();
    console.log("------------------> The Component Mounted ------------>");
  }, []);
  // What's return is what is going to display on the screen when the component is called
  // If we wanted to list or render all the pokemon fetched from our we use map and pass them down as props to our single pokemon component
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      {pokemon.map((poke) => {
        return (
          <SinglePokemon
            key={poke.id}
            imgUrl={poke.imageUrl}
            name={poke.name}
            number={poke.number}
            type1={poke.type1}
            type2={poke.type2}
          />
        );
      })}
    </div>
  );
};

export default Pokemon;
