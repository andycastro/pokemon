import React from "react";
import { usePokemon } from "../../context/pokemons";
import { BoxButtonsPagination, Button } from "./pagination.style";

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
      <BoxButtonsPagination>
        <Button onClick={gotoPrevPage}>Prev</Button>
        <Button onClick={gotoNextPage}>Next</Button>
      </BoxButtonsPagination>
    </>
  );
};

export default Pagination;
