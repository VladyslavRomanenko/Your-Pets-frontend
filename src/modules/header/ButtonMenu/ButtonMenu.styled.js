import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.yellow};
`;
