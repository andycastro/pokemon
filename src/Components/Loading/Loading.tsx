import React from "react";
import { WrapLoading } from "./loading.style";
import { GooSpinner } from "react-spinners-kit";

const Loading = () => {
  return (
    <>
      <WrapLoading>
        <GooSpinner size={55} color={"#67b26f"} />
        <p>loading...</p>
      </WrapLoading>
    </>
  );
};

export default Loading;
