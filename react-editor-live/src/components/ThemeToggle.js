import React from "react";
import { Switch } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <Switch
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      icon={<LightMode />}
      checkedIcon={<DarkMode />}
    />
  );
};

export default ThemeToggle;
