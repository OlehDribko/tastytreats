import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { GetNavLinkStyles, getNavLinkTypographyStyles } from "./styled";

export default function Navigation() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <GetNavLinkStyles to="/">
        {({ isActive }) => (
          <Typography
            variant="body1"
            sx={getNavLinkTypographyStyles({ isActive, theme })}
          >
            Home
          </Typography>
        )}
      </GetNavLinkStyles>

      <GetNavLinkStyles to="/favorites">
        {({ isActive }) => (
          <Typography
            variant="body1"
            sx={getNavLinkTypographyStyles({ isActive, theme })}
          >
            Favorites
          </Typography>
        )}
      </GetNavLinkStyles>
    </Box>
  );
}
