import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 0.9375;
  padding-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ $variant }) =>
    $variant === "hidden"
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}

  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.radii.round};
    border: 1px solid ${({ theme }) => theme.colors.blue};

    a {
      display: flex;
      justify-content: center;
      width: ${({ theme }) => theme.spacing(8.75)};
      height: ${({ theme }) => theme.spacing(8.75)};
      padding: 10px 10px 10px 10px;
      cursor: pointer;
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }
    &.activeLink {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }

    &.previous {
      margin-right: 15px;
      color: ${({ theme }) => theme.colors.blue};

      @media only screen and (min-width: 1280px) {
        margin-right: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }

    &.next {
      margin-left: 15px;
      color: ${({ theme }) => theme.colors.blue};

      @media only screen and (min-width: 1280px) {
        margin-left: 32px;
      }

      &.disabled {
        color: rgba(17, 17, 17, 0.5);
        cursor: default;
      }
    }
  }
`;
