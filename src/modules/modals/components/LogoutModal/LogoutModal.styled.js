import styled from "styled-components";

export const Filling = styled.div`
  padding-top: ${({ theme }) => theme.spacing(16.25)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};

  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(21)};
    padding-bottom: ${({ theme }) => theme.spacing(21)};
  }
`;

export const ModalTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(11)};

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.black};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(12)};

    font-size: ${({ theme }) => theme.spacing(9)};
    letter-spacing: 1.44px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    gap: 17px;
  }
`;
