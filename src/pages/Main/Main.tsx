import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { usePokemon } from "../../context/pokemons";

const Main = () => {
  const { pokemons } = usePokemon();

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

  return (
    <>
      <Header handleInputChange={handleInputChange} />
      <ul>
        {list.map((listPokemon: any) => {
          return <li key={listPokemon.name}> {listPokemon.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Main;
