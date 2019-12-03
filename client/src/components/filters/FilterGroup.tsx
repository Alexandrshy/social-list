import React from "react";
import classNames from "classnames";

import s from "./Filter.module.css";

type PropsType = {
  list: Array<string>;
  name: string;
  isPaired?: boolean;
};

export const FilterGroup: React.FC<PropsType> = ({
  list,
  name,
  isPaired = false
}) => {
  return (
    <ul className={s.filterList} key={name}>
      {list.map(
        (item: string, index: number) =>
          item && (
            <li
              className={classNames(s.filterItem, {
                "col-6": isPaired,
                "col-12": !isPaired
              })}
              key={`${name}-${index}`}
            >
              <label
                className={s.filterItem__label}
                htmlFor={`radio-${name}-${index}`}
              >
                <input
                  id={`radio-${name}-${index}`}
                  className={s.filterItem__input}
                  type="radio"
                  name={name}
                />
                <div className={s.filterItem__button}>{item}</div>
              </label>
            </li>
          )
      )}
    </ul>
  );
};
