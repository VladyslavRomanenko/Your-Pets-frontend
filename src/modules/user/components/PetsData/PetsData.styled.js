import styled from "styled-components";

export const PetsList = styled.ul`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const PetsCardContainer = styled.li`
  position: relative;
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.s};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media only screen and (min-width: 768px) {
    height: 256px;
    padding: 20px 20px 0 20px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: ${({ theme }) => theme.radii.l};
  }

  @media only screen and (min-width: 1280px) {
    height: 100%;
    padding: 20px 28px 20px 20px;
  }

  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media only screen and (min-width: 768px) {
      margin-top: 0;
      gap: 16px;
    }

    @media only screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 12px;
    }
  }
`;

export const PetsCardImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: ${({ theme }) => theme.radii.s};

  @media only screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
  }

  @media only screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`;

export const PetsCardText = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: 0.56px;
  color: #000;

  @media only screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.black};
  }

  @media only screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    letter-spacing: 0.64px;
    line-height: 1.375;
  }

  h3 {
    display: inline;
    font-family: ${({ theme }) => theme.fonts.manrope.bold};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    @media only screen and (min-width: 768px) {
      font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    }
  }
  p {
    display: inline;
    font-family: ${({ theme }) => theme.fonts.manrope.regular};
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    @media only screen and (min-width: 768px) {
      font-family: ${({ theme }) => theme.fonts.manrope.regular};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
    }
  }
`;

export const PetsCardIcon = styled.svg`
  position: absolute;
  top: 272px;
  right: 16px;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.blue};

  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

export const PetsModalTitle = styled.h3`
  width: 200px;
  margin: 60px auto 14px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.96px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media only screen and (min-width: 768px) {
    width: 288px;
    margin: 60px auto 40px;
    font-size: 28px;
    letter-spacing: -0.28px;
    color: #000;
  }
`;

export const PetsModalText = styled.p`
  width: 230px;
  margin: 0 auto 44px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: -0.14px;
  color: #000;

  span {
    font-family: ${({ theme }) => theme.fonts.manrope.bold};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  @media only screen and (min-width: 768px) {
    width: 393px;
    margin: 0 auto 48px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    letter-spacing: -0.16px;
  }
`;

export const PetsModalBtnContainer = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;
