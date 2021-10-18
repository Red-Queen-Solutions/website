import React from "react";
import "./Card.scss";

interface Props {
  icon: string;
  header: string;
  text: string;
}

export const Card: React.FC<Props> = ({ icon, header, text }) => {
  return (
    <div className="card">
      <img src={icon} className="card-icon" />
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
  );
};
