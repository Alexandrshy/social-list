import React from "react";
import classNames from "classnames";

import s from "./Burger.module.css";

type BurgerProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

export const Burger: React.FC<BurgerProps> = ({ isOpen, setOpen }) => {
  return (
    <button
      className={classNames(s.burger, { [s.isOpen]: isOpen })}
      onClick={() => setOpen(!isOpen)}
    >
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </button>
  );
};
