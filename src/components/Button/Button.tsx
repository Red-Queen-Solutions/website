import React, { FunctionComponent } from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  loading?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ label, loading = false }) => {
  return (
    <button disabled={loading} className="button">
      {label}
    </button>
  );
};

export default Button;
