import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  display: none;

  @media only screen and (min-width: 1280px) {
    display: flex;
    margin-left: 160px;
    gap: ${({ theme }) => theme.spacing(10)};
  }

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      @media only screen and (min-width: 768px) {
        gap: 60px;
      }
    `}
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  letter-spacing: 0.8px;

  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  &.active {
    color: ${({ theme }) => theme.colors.yellow};
  }

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      font-size: 32px;
      letter-spacing: 1.28px;

      @media only screen and (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontSizes.xxl};
      }
    `}
`;
