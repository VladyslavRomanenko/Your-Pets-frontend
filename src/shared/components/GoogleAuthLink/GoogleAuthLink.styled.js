import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoogleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({ theme }) => theme.spacing(2.5)};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  color: ${({ theme }) => theme.colors.grey};

  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const GoogleTextFirst = styled.span`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export const GoogleTextSecond = styled.span`
  text-decoration: underline;
`;
