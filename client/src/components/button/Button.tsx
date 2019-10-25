import React from "react";
import classNames from "classnames";

import s from "./Button.module.css";

type ButtonProps = {
  text?: string;
  size?: "small" | "normal" | "large";
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  isDisabled = false,
  onClick = () => {},
  size = "medium",
  type = "button"
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      className={classNames(s.button, s[`button--${size}`])}
    >
      {text}
    </button>
  );
};
