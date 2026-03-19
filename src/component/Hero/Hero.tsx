import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import HeroButton from "../Buttons/HeroButton";
import { heroImages } from "../header/constants";
import {
  ImageWrapper,
  StyledCard,
  StyledContainer,
  StyledImage,
} from "./styled";

export default function Hero() {
  return (
    <StyledCard>
      <Box component="div">
        <Typography variant="h1" sx={{ width: "448px" }}>
          Learn to Cook Tasty Treats' Customizable Masterclass
        </Typography>

        <Typography variant="body1">
          TastyTreats - Customize Your Meal with Ingredient Options and
          Step-by-Step Video Guides.
        </Typography>

        <HeroButton />
      </Box>

      <StyledContainer>
        {heroImages.map((image) => (
          <ImageWrapper key={image.src}>
            <StyledImage src={image.src} alt={image.alt} loading="lazy" />
          </ImageWrapper>
        ))}
      </StyledContainer>
    </StyledCard>
  );
}
