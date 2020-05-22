import React from "react";
import { Title, InputCustom, Description } from "./header.styles";

const Header = (props: any) => {
  const { handleInputChange } = props;

  return (
    <>
      <Title>Pokémon</Title>
      <Description>Search for Pokémon by name.</Description>
      <form>
        <InputCustom
          debounceTimeout={700}
          type="text"
          placeholder="What Pokémon are you looking for?"
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Header;
