import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
