import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const List = styled.ul`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    margin-right: 24px;
    margin-left: auto;
  }

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      display: flex;
      flex-direction: column;
      max-width: 165px;
      margin: 0;
      gap: ${({ theme }) => theme.spacing(3)};

      @media only screen and (min-width: 768px) {
        display: none;
      }
    `}

  ${({ $variant }) =>
    $variant === "attentionModal" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 12px;

      @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin: 0;
      }
    `}
`;

export const LinkStyles = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 142px;
  height: 38px;
  padding: 8px 20px;

  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 40px;
  text-align: center;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.white};
  }

  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  color: ${({ theme }) => theme.colors.yellow};
  background-color: transparent;

  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  ${({ $type }) =>
    $type === "login" &&
    css`
      min-width: 165px;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow};
    `}
`;
