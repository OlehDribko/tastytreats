import { StyledButton } from "./styled";

export default function HeroButton() {
  return (
    <StyledButton
      onClick={() => {
        alert("clicked");
      }}
    >
      Order now
    </StyledButton>
  );
}
