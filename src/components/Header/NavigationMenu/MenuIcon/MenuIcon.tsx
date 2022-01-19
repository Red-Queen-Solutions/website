import React from "react";
import "./MenuIcon.scss";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const MenuIcon = ({ children, isOpen, toggleIsOpen }: Props) => {
  return (
    <div className="menu-icon-container" onClick={toggleIsOpen}>
      <span className={`menu-icon ${isOpen ? "open" : ""}`}></span>
      {children}
    </div>
  );
};
