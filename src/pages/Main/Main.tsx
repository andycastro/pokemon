import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import { usePokemon } from "../../context/pokemons";
import { Container } from "../../styles/common.style";
import { Box, Info } from "./main.style";

const Main = () => {
  const { pokemons, loading } = usePokemon();

  const [searchResult, setSearchResult] = useState<any>([]);

  const handleInputChange = (e: any) => {
    const searchBy = e.target.value || "";
    const lowerSearch = searchBy.toLowerCase();
    const resultSearch = pokemons.filter((element: any) => {
      const lowerElement = element.name.toLowerCase();
      return lowerElement.indexOf(lowerSearch) !== -1;
    });
    setSearchResult(resultSearch);
  };

  const list = searchResult.length !== 0 ? searchResult : pokemons;

  const gotoDetails = () => {
    console.log(pokemons.url);
  };

  return (
    <>
      <Container>
        <Header handleInputChange={handleInputChange} />
        <Box>
          {loading && <p>loading...</p>}
          {!loading && (
            <ul>
              {list.map((pokemonData: any) => {
                return (
                  <>
                    <li key={pokemonData.name}>
                      <img
                        width="100px"
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonData.url
                          .split("pokemon/")[1]
                          .substring(
                            0,
                            pokemonData.url.split("pokemon/")[1].length - 1
                          )}.png`}
                        alt={pokemonData.name}
                      />
                      <Info>
                        <h2>{pokemonData.name}</h2>
                        <button onClick={gotoDetails}>+ details</button>
                      </Info>
                    </li>
                  </>
                );
              })}
            </ul>
          )}
        </Box>
        <Pagination />
      </Container>
    </>
  );
};

export default Main;
