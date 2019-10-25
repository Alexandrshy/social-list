import React from "react";

import { Logo } from "./logo/Logo";
import { Button } from "../button/button";
import { Filter } from "../filters/Filter";
import { Social } from "../social/Social";

import s from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div className={s.wrapperButton}>
        <Button text="Contribute" size="normal" />
      </div>
      <div className={s.wrapperSocial}>
        <Social />
      </div>
      <Filter />
    </header>
  );
};
