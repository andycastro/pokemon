import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { PokeData } from "./pokemons.interface";

const PokemonContext = createContext<any>({});

export default function PokemonProvider({ children }: any) {
  const [pokemons, setPokemons] = useState<PokeData[]>([]);

  const [currentPage, setCurrentpage] = useState<string>("pokemon?limit=50");
  const [nextPage, setNextpage] = useState<string>("");
  const [prevPage, setPrevpage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
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
  };
}
