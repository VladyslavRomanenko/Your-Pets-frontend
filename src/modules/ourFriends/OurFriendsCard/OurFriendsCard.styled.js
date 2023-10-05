import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  width: 280px;
  min-height: 300px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media only screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
    max-width: 100%;
    min-height: 350px;
  }
  @media only screen and (min-width: 1280px) {
    width: calc((100% - 64px) / 3);
  }
`;

export const StyledTittle = styled.h2`
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-left: 12px;
`;

export const StyledAddress = styled.address`
  max-width: 50%;
`;

export const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-style: normal;
  text-align: left;
  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledText = styled.a`
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-style: normal;
  word-break: break-word;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  @media only screen and (min-width: 1280) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledP = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-style: normal;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  @media only screen and (min-width: 1280) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledImgLink = styled.a`
  width: 120px;

  transition: transform ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const StyledTitleLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const StyledImg = styled.img`
  max-height: 200px;
  margin: 0 auto;
  object-fit: contain;

  @media only screen and (min-width: 1280px) {
  }
`;

export const StyledBtn = styled.button`
  border: 1px solid red;
  width: 100px;
  height: 100px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const StyledListItem = styled.li`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    transition: ${({ theme }) => theme.transitions.regular};
  }
`;
