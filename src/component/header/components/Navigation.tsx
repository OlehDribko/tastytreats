import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

import { getNavLinkStyles, getNavLinkTypographyStyles } from "./styled";

export default function Navigation() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <NavLink to="/" end style={getNavLinkStyles}>
        {({ isActive }) => (
          <Typography
            variant="body1"
            sx={getNavLinkTypographyStyles({ isActive, theme })}
          >
            Home
          </Typography>
        )}
      </NavLink>

      <NavLink to="/favorites" style={getNavLinkStyles}>
        {({ isActive }) => (
          <Typography
            variant="body1"
            sx={getNavLinkTypographyStyles({ isActive, theme })}
          >
            Favorites
          </Typography>
        )}
      </NavLink>
    </Box>
  );
}
