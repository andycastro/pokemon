import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  ul {
    margin: 30px 0;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      background: #67b26f;
      background: -webkit-linear-gradient(to right, #4ca2cd, #67b26f);
      background: linear-gradient(to right, #4ca2cd, #67b26f);
      margin: 15px 0;
      box-sizing: border-box;
      border-radius: 10px;
      width: 32%;
      min-height: 115px;
      position: relative;
      -webkit-box-shadow: 0px 14px 17px -14px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 14px 17px -14px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 14px 17px -14px rgba(0, 0, 0, 0.75);
      @media (max-width: 500px) {
        width: 100%;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        width: 32%;
        margin: 10px 1px;
      }
      img {
        position: absolute;
        right: 15px;
        top: -15px;
      }
      h2 {
        font-size: 2.2em;
        color: #fff;
        letter-spacing: -1px;
        font-weight: 600;
      }
    }
  }
`;

export const Info = styled.div`
  width: auto;
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  button {
    width: 100px;
    border: solid 1px #f9f9f9;
    background: none;
    padding: 7px;
    border-radius: 5px;
    font-size: 0.8em;
    font-weight: 600;
    margin: 5px 0;
    color: #fff;
  }
`;
