import styled from "styled-components";

export const Card = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - (2 * 31px)) / 3);
  }
`;

export const BeforeDiv = styled.div`
  height: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  border-radius: ${({ theme }) => theme.radii.l};
  background: ${({ theme }) => theme.colors.blueGradient};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(3.5)};
  }
`;

export const Article = styled.div`
  border-radius: ${({ theme }) => theme.radii.s};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const Img = styled.img`
  object-fit: cover;
  height: ${({ theme }) => theme.spacing(63)};
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.s};
`;

export const BlockInfo = styled.div`
  padding: 16px 12px 12px 12px;
`;

export const Title = styled.h3`
  height: ${({ theme }) => theme.spacing(16.5)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const Paragraph = styled.p`
  height: ${({ theme }) => theme.spacing(38.5)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;

  @media screen and (min-width: 768px) {
    height: ${({ theme }) => theme.spacing(33)};
    -webkit-line-clamp: 6;
  }

  @media screen and (min-width: 1280px) {
    height: ${({ theme }) => theme.spacing(33)};
    -webkit-line-clamp: 6;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
`;

export const ReadMore = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  transition: color ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
