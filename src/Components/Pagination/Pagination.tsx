import React from "react";
import { usePokemon } from "../../context/pokemons";
import { Button } from "./pagination.style";

const Pagination = () => {
  const { setCurrentpage, nextPage, prevPage } = usePokemon();

  function gotoNextPage() {
    setCurrentpage(nextPage);
  }

  function gotoPrevPage() {
    setCurrentpage(prevPage);
  }
  return (
    <>
      <Button onClick={gotoPrevPage}>prev</Button>
      <Button onClick={gotoNextPage}>next</Button>
    </>
  );
};

export default Pagination;
