import React, { useState, useEffect } from "react";
import {
  OverridesDiv,
  BoxHeaderPokemon,
  Containers,
  Chips,
  GreenText,
} from "./details.style";
import PokemonDetailsService from "../../services/details.service";
import Loading from "../../Components/Loading/Loading";
import BackButton from "../../Components/BackButton/BackButton";

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState<any>([]);
  const [pokemonOtherDetails, setPokemonOtherDetails] = useState<any>("");
  const [abilitiesList, setAbilitiesList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const currentUrl = window.location.pathname;
  const idPokemon = currentUrl.split("details/")[1];

  useEffect(() => {
    setLoading(true);
    PokemonDetailsService.getDetails(idPokemon).then((response) => {
      setLoading(false);
      setPokemonDetails(response.data.stats);
      setPokemonOtherDetails(response.data);
      setAbilitiesList(response.data.abilities);
    });
  }, [idPokemon]);

  return (
    <OverridesDiv>
      <Containers>
        <BackButton />
        <BoxHeaderPokemon>
          <img
            width="110px"
            src={`https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`}
            alt={pokemonOtherDetails.name}
          />
          <h1>{pokemonOtherDetails.name}</h1>
        </BoxHeaderPokemon>
      </Containers>
      {loading && <Loading />}
      {!loading && (
        <>
          <ul>
            <GreenText>Base Stats</GreenText>
            {pokemonDetails.map((listPokemondata: any, index: number) => {
              return (
                <li key={index}>
                  {`${listPokemondata.stat.name} ${listPokemondata.base_stat}`}
                </li>
              );
            })}
          </ul>
          <Chips>
            <GreenText>Abilities</GreenText>
            {abilitiesList.map((listAbilities: any, index: number) => {
              return <span key={index}>{listAbilities.ability.name}</span>;
            })}
          </Chips>
        </>
      )}
    </OverridesDiv>
  );
};

export default Details;
