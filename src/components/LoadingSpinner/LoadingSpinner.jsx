import React from "react";
import Loader from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}

export default LoadingSpinner;
