import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { PokeData } from "./pokemons.interface";

const PokemonContext = createContext<any>({});

export default function PokemonProvider({ children }: any) {
  const [pokemons, setPokemons] = useState<PokeData[]>([]);

  const [currentPage, setCurrentpage] = useState<string>("pokemon?limit=15");
  const [nextPage, setNextpage] = useState<string>("");
  const [prevPage, setPrevpage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [dataPokemons, setDataPokemons] = useState<any>([]);
  const [idPokemon, setIdPokemon] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    api.get(currentPage).then((response) => {
      setLoading(false);
      setNextpage(response.data.next);
      setPrevpage(response.data.previous);
      setPokemons(response.data.results);
    });
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);
    if (idPokemon) {
      api
        .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then((response) => {
          setLoading(false);
          setDataPokemons(response.data.stats);
        });
    }
  }, [idPokemon]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        loading,
        setCurrentpage,
        nextPage,
        prevPage,
        idPokemon,
        setIdPokemon,
        dataPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  const {
    pokemons,
    setPokemons,
    loading,
    setCurrentpage,
    nextPage,
    prevPage,
    idPokemon,
    setIdPokemon,
    dataPokemons,
  } = context;
  return {
    pokemons,
    setPokemons,
    loading,
    setCurrentpage,
    nextPage,
    prevPage,
    idPokemon,
    setIdPokemon,
    dataPokemons,
  };
}
