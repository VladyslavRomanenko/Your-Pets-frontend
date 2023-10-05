import styled from "styled-components";

export const EditUserBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  @media only screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const EditSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

export const CrossSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;
