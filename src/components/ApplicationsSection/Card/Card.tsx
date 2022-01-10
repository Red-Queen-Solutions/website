import React from "react";
import "./Card.scss";

interface Props {
  icon: string;
  header: string;
  text: string;
  imageClassName?: string;
}

export const Card: React.FC<Props> = ({
  icon,
  header,
  text,
  imageClassName,
}) => {
  return (
    <div className="card">
      <img
        src={icon}
        className={`card-icon${!imageClassName ? "" : ` ${imageClassName}`}`}
      />
      <h4>{header}</h4>
      <p>{text}</p>
    </div>
  );
};
