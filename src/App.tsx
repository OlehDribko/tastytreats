import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./component/Layout/Layout";
import Favorites from "./page/Favorites/Favorites";
import Home from "./page/Home/Home";
import { theme } from "./theme/theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleDarkModeChange = (nextIsDark: boolean): void => {
    setIsDarkMode(nextIsDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout
                isDarkMode={isDarkMode}
                onDarkModeChange={handleDarkModeChange}
              />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
