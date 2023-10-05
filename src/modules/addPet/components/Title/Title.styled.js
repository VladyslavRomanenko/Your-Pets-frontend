import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 1.44px;
  text-align: left;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    font-size: ${({ theme }) => theme.spacing(7)};
    &.centered {
      text-align: center;
    }
  }
`;
