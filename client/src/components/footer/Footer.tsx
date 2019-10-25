import React from "react";

import { Social } from "../social/Social";

import s from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <p className={s.title}>
          FollowUp created and maintained by{" "}
          <a
            className={s.link}
            href="https://twitter.com/alexandrshy"
            target="_blank"
          >
            Alex Shul
          </a>{" "}
          🖖
        </p>
        <Social />
      </div>
    </footer>
  );
};
