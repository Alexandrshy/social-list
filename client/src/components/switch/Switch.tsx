import React, { useState, useEffect } from "react";

import { THEME } from "../../constants";
import useDarkMode from "../../hooks/use-dark-mode";

import s from "./Switch.module.css";

export const Switch: React.FC = () => {
  const [darkMode, prefersDarkMode] = useDarkMode();

  return (
    <div className={s.switch}>
      <label className={s.switch__label} htmlFor="switcher">
        <input
          className={s.switch__input}
          type="checkbox"
          id="switcher"
          checked={darkMode === THEME.DARK}
          onChange={() =>
            prefersDarkMode(darkMode === THEME.DARK ? THEME.LIGHT : THEME.DARK)
          }
        />
        <div className={s.switch__slider}>
          <div className={s.switch__circle} />
        </div>
      </label>
    </div>
  );
};
