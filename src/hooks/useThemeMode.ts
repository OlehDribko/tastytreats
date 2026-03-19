import { createTheme, type Theme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "theme-mode";

type ThemeMode = "light" | "dark";

export function useThemeMode(defaultMode: ThemeMode = "dark") {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : defaultMode;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const isDarkMode = mode === "dark";

  const toggleTheme = (): void => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setDarkMode = (value: boolean): void => {
    setMode(value ? "dark" : "light");
  };

  return {
    mode,
    theme,
    isDarkMode,
    toggleTheme,
    setDarkMode,
  };
}
