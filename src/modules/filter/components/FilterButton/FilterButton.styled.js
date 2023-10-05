import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavListItemStyled = styled.li`
  position: relative;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 0.56px;

  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightBlue};

  border-radius: ${({ theme }) => theme.radii.l};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    background: ${({ theme }) => theme.colors.blueGradient};
    transform: scale(1.07);
    color: ${({ theme }) => theme.colors.white};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
`;
