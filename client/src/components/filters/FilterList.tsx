import React from "react";
import classNames from "classnames";

import { GilterGroup } from "./FilterGroup";

import s from "./Filter.module.css";

export const FilterList: React.FC = () => {
  return (
    <>
      <GilterGroup list={["👨 Male", "👩 Female"]} name="gender" isPaired />
      <GilterGroup
        list={[
          "🇬🇧 English",
          "🇨🇳 Chinese",
          "🇫🇷 French",
          "🇵🇹 Portuguese",
          "🇷🇺 Russian",
          "🇳🇱 Dutch"
        ]}
        name="language"
        isPaired
      />
      <GilterGroup
        list={[
          "🕹 AR & VR",
          "🤖 Artificial Intelligence",
          "📕 Authors",
          "💵 Blockchain",
          "🎨 Design",
          "🎥 Entertainment",
          "🕴 Founder",
          "☕ Indie makers",
          "💰 Investors",
          "📈 Marketing",
          "🎙 Podcasting",
          "🖥 SaaS",
          "🗺️ Travel",
          "🦄 Unicorns",
          "✍ Writing"
        ]}
        name="type"
      />
    </>
  );
};
