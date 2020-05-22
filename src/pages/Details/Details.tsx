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

  const data = dataPokemons;

  return (
    <>
      <h1>interna</h1>
      {loading && <p>loading...</p>}
      {!loading && (
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
      )}
    </>
  );
};

export default Details;
