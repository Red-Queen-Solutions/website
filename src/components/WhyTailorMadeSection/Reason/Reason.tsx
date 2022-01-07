import React, { FC } from "react";
import "./Reason.scss";
import Checkmark from "static/Checkmark.svg";

interface Props {
  header: string;
  text: string;
}

export const Reason: FC<Props> = ({ header, text }) => {
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
