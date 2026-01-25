import Button from "@mui/material/Button";

export default function HeroButton() {
  return (
    <Button
      onClick={() => {
        alert("clicked");
      }}
      sx={(theme) => ({
        color: theme.palette.primary.contrastText,
        border: `1px solid ${theme.palette.primary.main}`,
        padding: "14px 28px",
        borderRadius: "15px",
      })}
    >
      Order now
    </Button>
  );
}
// прибрати інлайн стилі у окремий файл.
