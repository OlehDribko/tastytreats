import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Typography
      component="div"
      sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1.11" }}
    >
      <Box component="span" sx={{ color: "#9BB537" }}>
        tasty
      </Box>
      treats
    </Typography>
  );
}
