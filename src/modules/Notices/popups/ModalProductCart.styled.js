import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`;

export const TopWrapper = styled.div`
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const PhotoDiv = styled.div`
  position: relative;
  height: 240px;
  width: 240px;
  margin: auto;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin: 0;
    height: 298px;
    width: 262px;
  }
`;

export const CategoryName = styled.span`
  position: absolute;
  top: 16px;
  display: block;
  border-radius: 0px 14px 14px 0px;
  width: 126px;
  padding: 11px 12px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};

  background: ${({ theme }) => theme.colors.lightBlue};
`;

export const NoticesInfoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 0px 0px 40px 40px;
`;

export const ParamsBox = styled.div`
  width: 256px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 321px;
  }
`;

export const NoticesInfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
  &::first-letter {
    text-transform: uppercase;
  }
  /* word-break: break-all; */
  @media screen and (min-width: 768px) {
    width: 268px;
    font-size: 28px;
  }
`;

export const ParametersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NoticesInfoParameters = styled.li`
  /* position: relative; */
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const ParametersValue = styled.span`
  width: 65%;

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: normal;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const NavValue = styled.a`
  width: 65%;

  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: normal;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  transition: color ${({ theme }) => theme.transitions.regular};

  ${({ $variant }) =>
    $variant === "yellow" &&
    css`
      color: ${({ theme }) => theme.colors.yellow};
    `}

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const CommentsText = styled.p`
  max-width: 256px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(17.5)};
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 1.5;
    letter-spacing: 0.64px;
  }
`;

export const CommentsTextStrong = styled.span`
  font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const WrapperBtn = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 17px;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export const ContactLink = styled.a`
  position: relative;
  width: ${({ theme }) => theme.spacing(64)};
  height: ${({ theme }) => theme.spacing(10)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.64px;

  border: ${({ theme }) => theme.borders.medium};
  color: ${({ theme }) => theme.colors.blue};

  border-radius: ${({ theme }) => theme.radii.l};
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
  transition: color ${({ theme }) => theme.transitions.regular},
    border-color ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border-color: transparent;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  @media only screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(32.25)};
  }
`;
