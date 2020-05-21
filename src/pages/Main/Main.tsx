import React, { useState, useEffect } from "react";
import { Title } from "./main.styles";
import PokemonService from "../../services/pokemon.sevice";

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((response) => {
      console.log("RESPONSE", response.data.results);
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <>
      <Title>Mains</Title>

      <ul>
        {pokemons.map((lista: any) => {
          return <li key={lista.name}> {lista.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Main;
