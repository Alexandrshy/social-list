import React from "react";

import { Icon } from "../icon/Icon";

import { TYPE_USE, SIZE_MEDIUM } from "../icon/constants";

import s from "./Social.module.css";

export const Social: React.FC = () => {
  return (
    <div className={s.social}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#" className={s.link}>
            <Icon name="twitter" size={SIZE_MEDIUM} type={TYPE_USE} />
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            <Icon name="facebook" size={SIZE_MEDIUM} type={TYPE_USE} />
          </a>
        </li>
        <li className={s.item}>
          <a href="#" className={s.link}>
            <Icon name="telegram" size={SIZE_MEDIUM} type={TYPE_USE} />
          </a>
        </li>
      </ul>
    </div>
  );
};
