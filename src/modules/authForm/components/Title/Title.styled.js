import styled from 'styled-components';

export const TitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(6)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 1.44px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
