import React from "react";
import { Dna } from "react-loader-spinner";
const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 top-[-60px]">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Preloader;
