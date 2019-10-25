import React, { useState } from "react";
import classNames from "classnames";

import { Burger } from "./burger/Burger";
import { Logo } from "./logo/Logo";
import { Button } from "../button/Button";
import { Filter } from "../filters/Filter";
import { Social } from "../social/Social";

import s from "./Header.module.css";

export const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={s.header}>
      <Burger isOpen={isOpen} setOpen={setOpen} />
      <Logo />
      <aside className={classNames(s.dropDown, { [s.isOpen]: isOpen })}>
        <div className={s.wrapperButton}>
          <Button text="Contribute" size="normal" />
        </div>
        <div className={s.wrapperSocial}>
          <Social />
        </div>
        <Filter />
      </aside>
    </header>
  );
};
