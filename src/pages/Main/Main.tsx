import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import { usePokemon } from "../../context/pokemons";

const Main = () => {
  const { pokemons, loading } = usePokemon();

  console.log("LOADING", loading);

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
      {loading && <p>loading...</p>}
      {!loading && (
        <ul>
          {list.map((listPokemon: any) => {
            return <li key={listPokemon.name}> {listPokemon.name}</li>;
          })}
        </ul>
      )}
      <Pagination />
    </>
  );
};

export default Main;
