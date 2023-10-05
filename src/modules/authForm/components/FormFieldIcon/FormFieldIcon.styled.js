import styled, { css } from 'styled-components';

const iconStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ $right }) => $right || '16px'};
`;

export const ErrorIcon = styled.svg`
  ${iconStyles}

  stroke: ${({ theme }) => theme.colors.red};
`;

export const SuccessIcon = styled.svg`
  ${iconStyles}
  fill:transparent;
  stroke: ${({ theme }) => theme.colors.green};
`;
