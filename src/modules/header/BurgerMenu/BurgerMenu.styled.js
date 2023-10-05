import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  transform: translateX(100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};

  min-width: 100vw;
  min-height: 100vh;
  padding: 22px 20px;

  background-color: ${({ theme }) => theme.colors.lightOrange};
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  transition: transform 350ms ease-out;

  &.open {
    transform: translateX(0);
  }

  @media only screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(8)};
    gap: ${({ theme }) => theme.spacing(23.5)};
  }
`;

export const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 440px;

  @media only screen and (min-width: 768px) {
    max-width: 704px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Svgsmall = styled.svg`
  stroke: ${({ theme }) => theme.colors.yellow};
`;
