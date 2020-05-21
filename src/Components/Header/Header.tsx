import React from "react";
import { Title, InputCustom } from "./header.styles";

const Header = (props: any) => {
  const { handleInputChange } = props;

  return (
    <>
      <Title>Pokémon</Title>
      <form>
        <InputCustom
          debounceTimeout={700}
          type="text"
          placeholder="Busca"
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Header;
