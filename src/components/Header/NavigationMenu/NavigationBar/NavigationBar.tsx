import React from "react";
import { NavigationLinks } from "../../NavigationLinks";
import "./NavigationBar.scss";

interface Props {
  isOpen: boolean;
}

export const NavigationBar = ({ isOpen }: Props) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <NavigationLinks />
    </div>
  );
};
