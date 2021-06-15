import React from "react";
import Logo from "static/RedQueenIcon.svg";
import "src/components/Header/Header.scss";

export const Header = () => {
  return (
    <div className="">
      <img src={Logo} />
    </div>
  );
};
