import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import { NavigationBar } from "./NavigationBar";

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prevValue) => !prevValue);
  return (
    <MenuIcon isOpen={isOpen} toggleIsOpen={toggleIsOpen}>
      <NavigationBar isOpen={isOpen} />
    </MenuIcon>
  );
};
