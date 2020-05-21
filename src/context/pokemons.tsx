import React, { createContext, useState, useEffect, useContext } from "react";
import PokemonService from "../services/pokemon.sevice";
import api from "../services/api";

interface PokeData {
  name: string;
  url: string;
}

const PokemonContext = createContext<any>([]);

export default function PokemonProvider({ children }: any) {
  const [pokemons, setPokemons] = useState<PokeData[]>([]);

  const [currentPage, setCurrentpage] = useState<string>("pokemon?limit=10");
  const [nextPage, setNextpage] = useState<string>("");
  const [prevPage, setPrevpage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    api.get(currentPage).then((response) => {
      setLoading(false);
      setNextpage(response.data.next);
      setPrevpage(response.data.prev);
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
  } = context;
  return { pokemons, setPokemons, loading, setCurrentpage, nextPage, prevPage };
}
