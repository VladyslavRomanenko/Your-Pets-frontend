import styled from "styled-components";

export const StyledPageTitle = styled.h1`
  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(20)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;
