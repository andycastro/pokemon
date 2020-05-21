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
      border-radius: 5px;
      width: 32%;
      min-height: 95px;
      position: relative;
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
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
