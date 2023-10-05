import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledUserNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing(2)};

  @media only screen and (min-width: 768px) {
    margin-right: ${({ theme }) => theme.spacing(5.5)};
  }

  @media only screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(6)};
    margin-right: 0;
  }

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      margin: 0;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    `};
`;

export const UserNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  @media only screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(3)};
    padding: 11px 16px;
  }

  @media only screen and (min-width: 1280px) {
    padding: 8px 16px;
  }

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      gap: ${({ theme }) => theme.spacing(3)};
      padding: 8px 16px;
    `};

  ${({ $variant }) =>
    $variant === "tabletMenu" &&
    css`
      display: none;
    `};
`;

export const UserName = styled.p`
  display: none;

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: 0.64px;

  color: ${({ theme }) => theme.colors.yellow};

  &::first-letter {
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      display: block;
    `};
`;

export const UserNavIcon = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.yellow};
`;
