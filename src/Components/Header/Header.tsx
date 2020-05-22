import React from "react";
import { InputCustom } from "./header.styles";

const Header = (props: any) => {
  const { handleInputChange } = props;

  return (
    <>
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
