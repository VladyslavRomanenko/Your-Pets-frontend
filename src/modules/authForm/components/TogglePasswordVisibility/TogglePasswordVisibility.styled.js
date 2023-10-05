import styled from 'styled-components';

export const SvgStyled = styled.svg`
  position: absolute;
  right: ${({ theme }) => theme.spacing(4)};
  top: 25%;
  cursor: pointer;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.blue};
`;
