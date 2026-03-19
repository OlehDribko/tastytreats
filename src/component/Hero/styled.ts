import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxSizing: "border-box",
  gap: theme.spacing(2),
  paddingTop: "100px",
  width: "100%",
  boxShadow: "none",
  border: "none",
  backgroundColor: theme.palette.background.default,
}));

export const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "3fr 6fr 3fr",
  gap: theme.spacing(2),
  width: "100%",
}));

export const ImageWrapper = styled(Box)(() => ({
  width: "100%",
}));
