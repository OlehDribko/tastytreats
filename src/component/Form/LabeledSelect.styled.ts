import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";

import { theme } from "../../theme/theme";

export const StyledFormLabel = styled(InputLabel)({
  mb: 0.75,
  fontSize: 14,
  lineHeight: 1.3,
  color: theme.palette.text.secondary,
  "&.Mui-focused": { color: theme.palette.text.secondary },
});
