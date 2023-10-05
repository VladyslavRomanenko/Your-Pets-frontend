import styled from "styled-components";

export const Filling = styled.div`
  padding-top: ${({ theme }) => theme.spacing(11)};
  padding-bottom: ${({ theme }) => theme.spacing(11)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};

  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.96px;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(10)};

    font-size: ${({ theme }) => theme.spacing(9)};
    letter-spacing: 1.44px;
  }
`;

export const TextStyled = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.29;
  letter-spacing: 0.56px;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
    line-height: 1.4;
    letter-spacing: 0.8px;
  }
`;
