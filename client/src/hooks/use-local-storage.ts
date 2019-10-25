import { useState } from "react";

export default function useLocalStorage(
  key: string,
  initialVale?: { [key: string]: string }
) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialVale;
    } catch (error) {
      console.log(error);
      return initialVale;
    }
  });

  const setValue = (value: string) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
