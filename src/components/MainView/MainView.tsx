import React from "react";
import { Header } from "src/components/Header";
import "./MainView.scss";

interface Props {
  children: React.ReactNode;
}

export const MainView: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      <div className="main-container">{children}</div>
    </div>
  );
};
