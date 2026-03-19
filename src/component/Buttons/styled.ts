import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { theme } from "../../theme/theme";

export const StyledButton = styled(Button)(() => ({
  color: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "14px 28px",
  borderRadius: "15px",
}));
