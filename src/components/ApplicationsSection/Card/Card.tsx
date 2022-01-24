import React from "react";
import { useIsSmallScreen } from "src/hooks/useIsSmallScreen";
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
  const isSmallScreen = useIsSmallScreen();

  if (isSmallScreen) {
    return (
      <div className="card">
        <div className="card-header-container">
          <div className="card-header-icon-container">
            <img
              src={icon}
              className={`card-icon${
                !imageClassName ? "" : ` ${imageClassName}`
              }`}
            />
          </div>

          <h4>{header}</h4>
        </div>
        <p>{text}</p>
      </div>
    );
  }

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
