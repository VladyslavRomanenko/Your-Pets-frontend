import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TextStyled = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const LinkStyled = styled(Link)`
  display: inline;
  color: ${({ theme }) => theme.colors.blue};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`;
