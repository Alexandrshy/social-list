import { useEffect } from "react";

import { DATA_NAME_THEME, LOCAL_STORAGE_THEME } from "../constants";
import useLocalStorage from "./use-local-storage";
import useMedia from "./use-media";

const usePrefersDarkMode = () => {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
};

function useDarkMode() {
  const [state, setState] = useLocalStorage(LOCAL_STORAGE_THEME);
  const prefersDarkMode = usePrefersDarkMode();
  const stateTheme = state || prefersDarkMode;

  useEffect(() => {
    const element = window.document.body;
    element.setAttribute(DATA_NAME_THEME, stateTheme);
  }, [stateTheme]);

  return [stateTheme, setState];
}

export default useDarkMode;
