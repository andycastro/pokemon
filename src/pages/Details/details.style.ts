import styled from "styled-components";

export const OverridesDiv = styled.div`
  ul {
    background-color: #fff;
    height: 70vh;
    border-radius: 20px;
    margin-top: -40px;
    li {
      list-style: none;
      margin: 20px 0 20px 40px;
      border-bottom: dotted 3px #c9c9c9;
      box-sizing: border-box;
      width: 78%;
      padding-bottom: 15px;
      font-size: 1.3em;
      font-weight: 100;
    }
  }
`;

export const GreenText = styled.h4`
  padding: 20px;
  font-weight: 900;
  color: #62b957;
`;

export const BoxHeaderPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.4em;
    font-weight: bold;
    margin-top: -40px;
    color: #fff;
    letter-spacing: -3px;
    text-transform: capitalize;
    margin-left: 5px;
  }
`;

export const Containers = styled.div`
  background: #67b26f;
  background: -webkit-linear-gradient(to right, #4ca2cd, #67b26f);
  background: linear-gradient(to right, #4ca2cd, #67b26f);
  height: 250px;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 20px;
  span {
    background: #4ca2cd;
    margin: 5px;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
  }
  h4 {
    padding: 20px 0;
  }
`;
