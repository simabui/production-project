import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: string;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return {
    toggleTheme,
    theme,
  };
}
