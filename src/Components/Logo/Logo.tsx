import React from "react";
import { Title, Description } from "../../styles/common.style";

const Logo = (props: any) => {
  const { subtitle } = props;

  return (
    <>
      <Title>Pokémon</Title>
      <Description>{subtitle}</Description>
    </>
  );
};

export default Logo;
