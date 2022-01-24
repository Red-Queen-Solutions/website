import React, { FC } from "react";
import "./Reason.scss";
import Checkmark from "static/Checkmark.svg";
import { useWindowSize } from "src/hooks/useWindowSize";

interface Props {
  header: string;
  text: string;
}

export const Reason: FC<Props> = ({ header, text }) => {
  const windowSize = useWindowSize();

  if (windowSize.width < 768) {
    return (
      <div className="reason">
        <div className="reason-header-mobile">
          <img src={Checkmark} alt="checkmark" className="reason-checkmark" />
          <h4>{header}</h4>
        </div>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className="reason">
      <div className="reason-left">
        <img src={Checkmark} alt="checkmark" className="reason-checkmark" />
      </div>
      <div className="reason-right">
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
