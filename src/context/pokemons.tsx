import React, { createContext, useState, useEffect, useContext } from "react";
import PokemonService from "../services/pokemon.sevice";

interface PokeData {
  name: string;
  url: string;
}

const PokemonContext = createContext<any>([]);

export default function PokemonProvider({ children }: any) {
  const [pokemons, setPokemons] = useState<PokeData[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((response) => {
      console.log("RESPONSE", response.data.results);
      setPokemons(response.data.results);
    });
  }, []);

  console.log("Poke", pokemons);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  const { pokemons, setPokemons } = context;
  return { pokemons, setPokemons };
}
