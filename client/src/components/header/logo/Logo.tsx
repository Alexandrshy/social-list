import React from "react";

import { Icon } from "../../icon/Icon";

import s from "./Logo.module.css";

export const Logo: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <a href="/" className={s.logo}>
        <Icon name="logo" />
        <span>FollowUp</span>
      </a>
    </div>
  );
};
