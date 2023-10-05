import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
