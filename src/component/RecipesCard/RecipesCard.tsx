import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function RecipesCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt="recipe image"
      />
    </Card>
  );
}
