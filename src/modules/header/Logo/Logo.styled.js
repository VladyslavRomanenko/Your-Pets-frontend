import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoLink = styled(Link)`
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }
`;

export const LogoSvg = styled.svg`
  width: 116px;
  height: 28px;

  @media only screen and (min-width: 768px) {
    width: 162px;
  }
`;
