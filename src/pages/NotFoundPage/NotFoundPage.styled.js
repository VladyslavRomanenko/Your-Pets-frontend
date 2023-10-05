import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: ${({ theme }) => theme.spacing(20)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.extraBold};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: #000000;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(1.5)};

    font-family: ${({ theme }) => theme.fonts.manrope.bold};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 32px;
    line-height: 1.3;
  }
`;

export const NotFoundPicture = styled.picture`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(15)};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(17.5)};
  }
`;

export const HomeLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 248px;
  padding: 8px 28px;
  gap: ${({ theme }) => theme.spacing(3)};

  border-radius: ${({ theme }) => theme.radii.l};
  background-color: ${({ theme }) => theme.colors.blue};
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

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;

export const HomeLinkLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: 0.64px;

  color: ${({ theme }) => theme.colors.lightPink};
`;

export const PawPrintIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.lightPink};
`;
