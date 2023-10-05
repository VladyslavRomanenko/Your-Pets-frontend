import styled, { css } from "styled-components";

export const SvgStyled = styled.svg`
  fill: currentColor;
  stroke: currentColor;

  ${({ $iconVariant }) =>
    $iconVariant === "transparent" &&
    css`
      fill: transparent;
      cursor: pointer;
    `}

  ${({ $iconVariant }) =>
    $iconVariant === "filterbutton" &&
    css`
      fill: transparent;
      width: 16px;
      height: 16px;
      cursor: pointer;
    `}

      ${({ $iconVariant }) =>
    $iconVariant === "favorite" &&
    css`
      fill: ${({ theme }) => theme.colors.white};
    `}
`;

export const ButtonStyled = styled.button`
  height: ${({ theme }) => theme.spacing(10)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  letter-spacing: 0.64px;

  color: ${({ theme }) => theme.colors.blue};

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

  /* Варіант "bigButtonFirst" */
  ${({ $variant }) =>
    $variant === "bigButtonFirst" &&
    css`
      width: ${({ theme }) => theme.spacing(62)};
      padding: 8px 28px;
      background: none;
      border: ${({ theme }) => theme.borders.medium};
      font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  /* Варіант "bigButtonSecond" */
  ${({ $variant }) =>
    $variant === "bigButtonSecond" &&
    css`
      width: ${({ theme }) => theme.spacing(62)};
      padding: 8px 28px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
    `}

 /* Варіант "mediumButtonFirst" */
      ${({ $variant }) =>
    $variant === "mediumButtonFirst" &&
    css`
      width: 100%;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
      @media only screen and (min-width: 768px) {
        width: ${({ theme }) => theme.spacing(41.25)};
      }
    `}

/* Варіант "cancelBtnAddPet" */
      ${({ $variant }) =>
    $variant === "cancelBtnAddPet" &&
    css`
      width: 248px;
      color: ${({ theme }) => theme.colors.blue};
      background: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => theme.borders.none};
      &:focus,
      &:hover {
        border: none;
        background: ${({ theme }) => theme.colors.white};
        transform: scale(1.07);
      }
      @media only screen and (min-width: 768px) {
        width: 80px;
      }
    `}

 /* Варіант "mediumButtonSecond" */
      ${({ $variant }) =>
    $variant === "mediumButtonSecond" &&
    css`
      width: 100%;
      background: none;
      border: ${({ theme }) => theme.borders.medium};
      @media only screen and (min-width: 768px) {
        width: ${({ theme }) => theme.spacing(41.25)};
      }

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

     /* Варіант "logoutButton" */
      ${({ $variant }) =>
    $variant === "logoutButton" &&
    css`
      width: ${({ theme }) => theme.spacing(64)};
      border-radius: ${({ theme }) => theme.radii.l};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};

      @media only screen and (min-width: 768px) {
        width: ${({ theme }) => theme.spacing(32.25)};
      }
    `}

    ${({ $variant }) =>
    $variant === "cancel" &&
    css`
      width: ${({ theme }) => theme.spacing(64)};
      border: ${({ theme }) => theme.borders.medium};
      background-color: none;
      color: ${({ theme }) => theme.colors.blue};

      &:focus,
      &:hover {
        border: none;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blueGradient};
      }

      @media only screen and (min-width: 768px) {
        width: ${({ theme }) => theme.spacing(32.25)};
      }
    `}

  ${({ $variant }) =>
    $variant === "addButton" &&
    css`
      width: ${({ theme }) => theme.spacing(20)};
      height: ${({ theme }) => theme.spacing(20)};
      flex-direction: column-reverse;
      gap: 4px;
      border-radius: ${({ theme }) => theme.radii.round};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
      border-radius: ${({ theme }) => theme.radii.round};
      background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
      svg {
        width: 24px;
        height: 24px;
      }
      @media only screen and (min-width: 768px) {
        z-index: 0;
        height: 40px;
        width: 129px;
        flex-direction: row;
        padding: 8px 20px;
        gap: 8px;
        border-radius: ${({ theme }) => theme.radii.l};
        background: ${({ theme }) => theme.colors.blue};
      }
    `}

    ${({ $variant }) =>
    $variant === "authButton" &&
    css`
      width: 100%;
      padding: 10px 28px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};

      font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
      font-size: ${({ theme }) => theme.fontSizes.l};
      font-style: normal;
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};

      letter-spacing: 0.8px;
    `}

    ${({ $variant }) =>
    $variant === "filter" &&
    css`
      display: flex;
      padding: 0;
      gap: 0;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      width: ${({ theme }) => theme.spacing(10)};

      color: ${({ theme, $isButtonsVisible }) =>
        $isButtonsVisible ? theme.colors.white : theme.colors.blue};
      background-color: ${({ theme, $isButtonsVisible }) =>
        $isButtonsVisible ? theme.colors.blue : theme.colors.lightBlue};

      @media screen and (min-width: 768px) {
        border-radius: 40px;
        width: ${({ theme }) => theme.spacing(38)};
        background: ${({ theme, $isButtonsVisible }) =>
          $isButtonsVisible ? theme.colors.blueGradient : "none"};
        border: ${({ theme, $isButtonsVisible }) =>
          $isButtonsVisible ? theme.borders.none : theme.borders.medium};
        color: ${({ theme, $isButtonsVisible }) =>
          $isButtonsVisible ? theme.colors.white : theme.colors.blue};
      }
      @media screen and (min-width: 1280px) {
      }

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

    ${({ $variant }) =>
    $variant === "filterBySelect" &&
    css`
      width: 100%;
      padding: 4px 8px;
      background: ${({ theme }) => theme.colors.lightBlue};
      border-radius: ${({ theme }) => theme.radii.s};

      justify-content: flex-start;
      gap: ${({ theme }) => theme.spacing(2.25)};

      font-family: ${({ theme }) => theme.fonts.inter.regular};
      font-size: ${({ theme }) => theme.fontSizes.s};
      font-style: normal;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      line-height: 18.2px;
      letter-spacing: normal;

      &:focus,
      &:hover {
        border: none;
        background: none;
        transform: none;
      }

      &:hover::before,
      &:focus::before {
        opacity: 0;
      }
    `};

  ${({ $variant }) =>
    $variant === "Save" &&
    css`
      min-height: 31px;
      padding: 5px 107px;
      font-size: ${({ theme }) => theme.fontSizes.s};
      letter-spacing: 0.56px;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.lightPink};

      @media only screen and (min-width: 768px) {
        max-height: 32px;
        margin: 0 auto 16px 102px;
        padding: 8px 108px;
      }
      @media only screen and (min-width: 1280px) {
        max-height: 34px;
        margin: 10px auto 2px 100px;
        padding: 6px 108px;
        font-size: ${({ theme }) => theme.fontSizes.m};
        letter-spacing: 0.64px;
      }
    `}

  ${({ $variant }) =>
    $variant === "filterCheck" &&
    css`
      padding: 8px 10px;
      gap: ${({ theme }) => theme.spacing(1)};
      min-width: ${({ theme }) => theme.spacing(21.5)};
      background: ${({ theme }) => theme.colors.white};
      border-radius: ${({ theme }) => theme.radii.s};
      box-shadow: ${({ theme }) => theme.shadows.primary};

      font-family: ${({ theme }) => theme.fonts.inter.regular};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-style: normal;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      line-height: 14.4px;
      letter-spacing: normal;
      transition: transform ${({ theme }) => theme.transitions.regular};
      cursor: default;

      &:focus,
      &:hover {
        border: none;
        background: ${({ theme }) => theme.colors.white};
        transform: none;
        transform: scale(1.07);
      }

      &:hover::before,
      &:focus::before {
        opacity: 0;
      }
    `}
    ${({ $variant }) =>
    $variant === "addPet" &&
    css`
      display: none;

      @media screen and (min-width: 768px) {
        display: flex;
        width: ${({ theme }) => theme.spacing(32.25)};
        padding: 8px 16px;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.blue};

        font-family: ${({ theme }) => theme.fonts.manrope.bold};
        font-size: ${({ theme }) => theme.fontSizes.m};
        font-style: normal;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        line-height: normal;
        letter-spacing: 0.64px;
      }
    `}

    ${({ $loading }) =>
    $loading &&
    css`
      opacity: 0.5;
    `};
`;
