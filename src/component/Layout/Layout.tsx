import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

import { layoutPaddingX } from "../../theme/theme";
import { Header } from "../header/Header";

type LayoutProps = {
  isDarkMode: boolean;
  onDarkModeChange: (isDarkMode: boolean) => void;
};

export default function Layout({ isDarkMode, onDarkModeChange }: LayoutProps) {
  return (
    <Box data-testid="app-root" sx={{ px: layoutPaddingX }}>
      <Header isDarkMode={isDarkMode} onDarkModeChange={onDarkModeChange} />
      <Outlet />
    </Box>
  );
}
