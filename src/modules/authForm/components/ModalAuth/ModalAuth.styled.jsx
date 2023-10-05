import styled from 'styled-components';

export const WrapperModalAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 44px 0 36px 0;

  @media screen and (min-width: 768px) {
    padding: 36px 0 36px 0;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const Text = styled.p`
  margin: 24px 0 40px 0;
  font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: normal;
  letter-spacing: 0.64;

  @media screen and (min-width: 768px) {
    margin: 52px 0 60px 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: 0.96;
  }
  @media screen and (min-width: 1280px) {
  }
`;
