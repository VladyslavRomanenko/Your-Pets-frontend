import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ProductList = styled.ul`
  display: grid;

  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
  max-width: 450px;
  margin-top: 40px;
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 450px) {
    max-width: initial;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 4fr);
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 4fr);
    margin-bottom: ${({ theme }) => theme.spacing(17)};
  }
`;

export const ProductItem = styled.li`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  /* display: grid;
  align-items: end; */
  height: 100%;
  margin: auto;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  border-radius: 0px 0px 20px 20px;
  @media screen and (min-width: 768px) {
    border-radius: 0px 0px 40px 40px;
  }
  /* display: grid;
  align-items: end; */
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const PetCategory = styled.span`
  position: absolute;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: normal;
  font-family: ${({ theme }) => theme.fonts.medium} !important;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.lightBlue};
  backdrop-filter: blur(2px);
  padding: 6px 53px 6px 20px;
  border-top-right-radius: ${({ theme }) => theme.fontSizes.s};
  border-bottom-right-radius: ${({ theme }) => theme.fontSizes.s};
  top: ${({ theme }) => theme.fontSizes.l};
`;

export const FavoriteBtn = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: transparent;
  color: transparent;
  fill: transparent;
  transition: 250ms;
  width: 44px;
  height: 44px;
  top: 12px;
  right: 12px;
  background: ${({ theme }) => theme.colors.lightBlue};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.blue};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    fill: ${({ theme }) => theme.colors.blue};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const DeleteBtn = styled(FavoriteBtn)`
  top: 68px;

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.blue};
  }
`;

export const IconPrimal = styled.svg`
  height: 28px;
  width: 28px;
  stroke: ${({ theme }) => theme.colors.blue};

  transition: fill ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.blue};
  }

  ${({ $variant }) =>
    $variant === "favorite" &&
    css`
      fill: ${({ theme }) => theme.colors.blue};
    `}

  ${({ $variant }) =>
    $variant === "default" &&
    css`
      fill: transparent;
    `}
`;

export const NoticesItemImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 288px;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  height: 66px;
  margin-bottom: 20px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const WrapperBtn = styled.div`
  display: inline-flex;
  justify-content: center;
`;

export const WrapperInformation = styled.ul`
  position: absolute;
  bottom: 12px;
  left: 5%;
  display: inline-flex;
  justify-content: center;
  gap: ${({ theme }) => theme.fontSizes.xs};

  @media screen and (min-width: 768px) {
    left: 24px;
    gap: ${({ theme }) => theme.fontSizes.xl};
  }

  @media screen and (min-width: 1280px) {
    left: 12px;
    gap: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const InformationMap = styled.li`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: normal;
  width: 80px;

  display: flex;
  align-items: center;
  gap: 4px;
  letter-spacing: 0.48px;

  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.lightBlue};
  backdrop-filter: blur(2px);
  padding: 2px 3px;
  border-radius: ${({ theme }) => theme.radii.xs};
  border-color: ${({ theme }) => theme.colors.blue};
  transition: transform ${({ theme }) => theme.transitions.regular};
  cursor: default;

  ${({ $filtered }) =>
    $filtered === "yes" &&
    css`
      background: ${({ theme }) => theme.colors.blueGradient};
      color: ${({ theme }) => theme.colors.white};

      svg {
        stroke: ${({ theme }) => theme.colors.white};
      }
    `};

  ${({ $type }) =>
    $type === "location" &&
    css`
      cursor: pointer;

      &:hover,
      &:focus {
        background: ${({ theme }) => theme.colors.blueGradient};
        color: ${({ theme }) => theme.colors.white};

        svg {
          stroke: ${({ theme }) => theme.colors.white};
        }
      }
    `};
`;

export const LocationLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const IconInformation = styled.svg`
  height: 24px;
  width: 24px;
  stroke: ${({ theme }) => theme.colors.blue};
  fill: transparent;
`;

export const WrapperLocation = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 6ch;
`;

export const AddPetLink = styled(Link)`
  position: fixed;
  top: 75%;
  right: 20px;
  height: ${({ theme }) => theme.spacing(20)};
  width: ${({ theme }) => theme.spacing(20)};
  padding: ${({ theme }) => theme.spacing(4)};
  padding-top: ${({ theme }) => theme.spacing(5)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-direction: column;

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
  border-radius: ${({ theme }) => theme.radii.round};

  svg {
    stroke: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
