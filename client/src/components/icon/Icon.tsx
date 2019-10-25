import React, { memo } from "react";

import {
  SIZE_RESPONSIVE,
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE,
  TYPE_USE,
  TYPE_IMAGE
} from "./constants";
import * as commonIcon from "./svg/common";

import s from "./Icon.module.css";

const ICONS: { [key: string]: any } = {
  ...commonIcon
};

const SIZES: { [key: string]: string | number } = {
  [SIZE_SMALL]: 16,
  [SIZE_MEDIUM]: 22,
  [SIZE_LARGE]: 50,
  [SIZE_RESPONSIVE]: "100%"
};

type PropsType = {
  name: string;
  size?: string;
  type?: string;
};

export const Icon: React.FC<PropsType> = ({
  name,
  size = SIZE_RESPONSIVE,
  type = "image"
}) => {
  const icon = ICONS[name];
  const sizeView = SIZES[size];

  if (typeof icon === "undefined") return null;

  return (
    <svg
      width={sizeView}
      height={sizeView}
      viewBox={icon.viewBox}
      className={s.container}
    >
      {type === TYPE_USE && <use xlinkHref={`${icon}#${name}`} />}
      {type === TYPE_IMAGE && (
        <image xlinkHref={icon} width={sizeView} height={sizeView} />
      )}
    </svg>
  );
};
