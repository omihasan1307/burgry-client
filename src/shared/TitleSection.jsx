import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className="text-center">
      <h1 className="uppercase text-white font-bold text-4xl">{title}</h1>
      <hr className="border-[#FFBA00] my-8 w-40 border-2 mx-auto lg:text-left" />
      <h1 className="w-6/12 mx-auto">{description}</h1>
    </div>
  );
};

export default TitleSection;
