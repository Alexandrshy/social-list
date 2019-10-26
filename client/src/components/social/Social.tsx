import React from "react";

import { Icon } from "../icon/Icon";

import { TYPE_USE, SIZE_MEDIUM } from "../icon/constants";

import s from "./Social.module.css";

export const SOCIAL_LIST = [
  {
    name: "twitter",
    link: "/"
  },
  {
    name: "facebook",
    link: "/"
  },
  {
    name: "telegram",
    link: "/"
  }
];

export const Social: React.FC = () => {
  return (
    <div className={s.social}>
      <ul className={s.list}>
        {SOCIAL_LIST.map(({ name, link }, index) => {
          return (
            <li className={s.item} key={index}>
              <a href={link} className={s.link}>
                <Icon name={name} size={SIZE_MEDIUM} type={TYPE_USE} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
