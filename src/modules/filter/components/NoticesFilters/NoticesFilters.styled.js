import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperNoticesFilter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(5)};

  @media only screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(10)};
  }
`;

export const WrapperRightSide = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: baseline;
  justify-content: end;
  flex-wrap: wrap-reverse;

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap-reverse;
  }
  @media only screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;

export const WrapperRightFilterButton = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  justify-content: center;
`;

export const AddPetLink = styled(Link)`
  position: relative;
  display: none;
  height: ${({ theme }) => theme.spacing(10)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};

  letter-spacing: 0.64px;

  border-radius: ${({ theme }) => theme.radii.l};
  border: none;
  padding: 8px 20px;

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({ theme }) => theme.colors.blueGradient};
    border-radius: ${({ theme }) => theme.radii.l};
    opacity: 0;
    z-index: -1;

    transition: opacity ${({ theme }) => theme.transitions.regular};
  }

  cursor: pointer;
  outline: none;
  transition: transform ${({ theme }) => theme.transitions.regular},
    color ${({ theme }) => theme.transitions.regular},
    background-color ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    background: ${({ theme }) => theme.colors.blueGradient};
    transform: scale(1.07);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: ${({ theme }) => theme.spacing(32.25)};
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    padding: 8px 16px;
  }

  svg {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;
