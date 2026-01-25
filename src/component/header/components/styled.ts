import type { Theme } from "@mui/material/styles";

export interface NavLinkTypographyStyleProps {
  isActive: boolean;
  theme: Theme;
}

export const getNavLinkTypographyStyles = ({
  isActive,
  theme,
}: NavLinkTypographyStyleProps) => ({
  fontSize: "12px",
  fontWeight: isActive ? 500 : 400,
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  paddingBottom: "4px",
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
});
export const getNavLinkStyles = () => ({
  textDecoration: "none",
  display: "inline-flex",
});
