import React from "react";

import { FilterGroup } from "./FilterGroup";

export const FilterList: React.FC = () => {
  return (
    <>
      <FilterGroup
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
      <FilterGroup
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
    </>
  );
};
