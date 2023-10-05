import styled from "styled-components";

export const Filling = styled.div`
  padding-top: ${({ theme }) => theme.spacing(12)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};

  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(9)};
    padding-bottom: ${({ theme }) => theme.spacing(9)};
    padding-left: ${({ theme }) => theme.spacing(21.5)};
    padding-right: ${({ theme }) => theme.spacing(20.25)};
  }
`;

export const BlockText = styled.div`
  height: ${({ theme }) => theme.spacing(14.25)};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(11)};
  @media only screen and (min-width: 768px) {
    height: ${({ theme }) => theme.spacing(16.5)};
    padding: 0;
    margin-bottom: ${({ theme }) => theme.spacing(12)};
  }
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(3.5)};

  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.96px;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(10)};

    font-size: ${({ theme }) => theme.spacing(7)};
    letter-spacing: -0.28px;
  }
`;

export const TextStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: -0.14px;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(4)};
    letter-spacing: -0.16px;
  }
`;

export const BoldText = styled.span`
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: -0.14px;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(4)};
    letter-spacing: -0.16px;
  }
`;

export const BlockButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 17px;
  }
`;
