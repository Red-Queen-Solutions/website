import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "src/components/Header";
import "./MainView.scss";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const MainView: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>{`${title} - Red Queen Solutions`}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Mulish"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div className="main-container">{children}</div>
    </div>
  );
};
