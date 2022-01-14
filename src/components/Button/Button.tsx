import React, { FunctionComponent } from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={disabled ? "button-disabled" : "button"}
    >
      {label}
    </button>
  );
};

export default Button;
