import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  align-items: center;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const CancelBackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  ${({ $disabled }) =>
    $disabled === "yes" &&
    css`
      opacity: 0.5;
    `};
`;

export const CancelBackIcon = styled.svg`
  stroke: ${({ theme }) => theme.colors.blue};
`;

export const LinkText = styled.span`
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: 0.64px;
  color: ${({ theme }) => theme.colors.blue};
`;
