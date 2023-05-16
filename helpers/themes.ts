import { ThemeDefinition } from "vuetify";

// テーマ名
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#b71c1c",
    accent: "#212121",
    error: "#f44336",
    info: "#2196f3",
    success: "#4caf50",
    warning: "#ff9800",
  },
};

// Dark モードのテーマ名
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#0C111B",
    surface: "#1f2937",
    primary: "#b71c1c",
    accent: "#212121",
    error: "#f44336",
    info: "#2196f3",
    success: "#4caf50",
    warning: "#ff9800",
  },
};
