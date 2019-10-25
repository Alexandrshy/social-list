import React from "react";

import { FilterList } from "./FilterList";

import s from "./Filter.module.css";

export const Filter: React.FC = () => {
  return (
    <nav className={s.filter}>
      <FilterList />
    </nav>
  );
};
