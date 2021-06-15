import React from "react";
import { Header } from "src/components/Header";
import "./MainView.scss";

interface Props {
  children: React.ReactNode;
}

export const MainView: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-container">{children}</div>
    </>
  );
};
