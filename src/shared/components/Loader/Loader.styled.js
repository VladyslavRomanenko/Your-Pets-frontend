import styled, { css, keyframes } from "styled-components";

export const pawAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const PawStyled = styled.div`
  width: 25px;
  height: 25px;
  animation: ${pawAnimation} 2050ms ease-in-out infinite;
  opacity: 0;

  @media only screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .icon {
    fill: currentColor;
  }

  &:nth-child(odd) {
    transform: rotate(-10deg);
  }

  &:nth-child(even) {
    transform: rotate(10deg) translate(125%, 0);
  }

  ${({ $type }) =>
    $type === "small" &&
    css`
      @media only screen and (min-width: 768px) {
        width: 35px;
        height: 35px;
      }
    `};
`;

export const AjaxLoader = styled.div`
  position: fixed;
  top: 40%;
  left: 55%;
  transform: translate(-50%, -50%);
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 50px;

  z-index: 999;

  fill: ${({ theme }) => theme.colors.black};

  @media only screen and (min-width: 768px) {
    left: 50%;
  }

  ${PawStyled}:nth-child(1) {
    animation-delay: 0.25s;
  }
  ${PawStyled}:nth-child(2) {
    animation-delay: 0s;
  }
  ${PawStyled}:nth-child(3) {
    animation-delay: -0.25s;
  }
  ${PawStyled}:nth-child(4) {
    animation-delay: -0.5s;
  }
  ${PawStyled}:nth-child(5) {
    animation-delay: -0.75s;
  }
  ${PawStyled}:nth-child(6) {
    animation-delay: -1s;
  }

  ${PawStyled}.no-cssanimations {
    opacity: 1;
  }

  ${({ $type }) =>
    $type === "small" &&
    css`
      @media only screen and (min-width: 768px) {
        top: 45%;
      }
    `};
`;
