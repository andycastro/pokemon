import React, { useState, useEffect } from "react";
import { usePokemon } from "../../context/pokemons";

const Details = () => {
  const {
    pokemons,
    loading,
    idPokemon,
    setIdPokemon,
    dataPokemons,
  } = usePokemon();

  useEffect(() => {
    // setIdPokemon("43");
  });

  console.log("Dados", dataPokemons);

  console.log(idPokemon);

  const data = dataPokemons.data;

  return (
    <>
      <h1>interna</h1>
      <ul>
        {dataPokemons.map((listPokemondata: any, index: number) => {
          return (
            <li key={index}>
              {listPokemondata.stat.name}
              {listPokemondata.base_stat}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Details;
