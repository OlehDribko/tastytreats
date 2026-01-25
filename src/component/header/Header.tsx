import { Box } from "@mui/material";

import Switch from "../Switch/Switch";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

type HeaderProps = {
  isDarkMode: boolean;
  onDarkModeChange: (isDarkMode: boolean) => void;
};

export function Header({ isDarkMode, onDarkModeChange }: HeaderProps) {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="28px"
      // pt1 ( налаштувати під проект стандартні падінги)
    >
      <Navigation />
      <Logo />
      <div>
        <img
          src="public/icons/shopping-cart.svg"
          alt="shopping-cart"
          width={24}
          height={24}
        />
        <Switch checked={isDarkMode} onChange={onDarkModeChange} />
      </div>
    </Box>
  );
}
