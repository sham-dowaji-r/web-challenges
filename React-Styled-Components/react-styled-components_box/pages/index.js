import { StyledBox } from "@/components/BoxWithStyledComponents.js";
import { FlexContainer } from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <FlexContainer>
      <StyledBox />
      <StyledBox $isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </FlexContainer>
  );
}
