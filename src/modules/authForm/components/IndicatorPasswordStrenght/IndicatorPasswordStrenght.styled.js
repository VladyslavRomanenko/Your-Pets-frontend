import styled, { css, keyframes } from 'styled-components';

const passwordStrengthAnimation = keyframes`
  from {
    width: 0%;
    background-color: transparent;
  }
  to {
    width:100%;
    background-color: ${props => props.color};
  }
`;

export const PasswordStrengthIndicator = styled.div`
  height: ${({ theme }) => theme.spacing(0.5)};
  background-color: transparent;
  border-radius: 5px;
  animation: ${passwordStrengthAnimation} 0.5s ease;
  width: ${props => props.width};
  background-color: ${props => props.color};
  transition: all 0.4s ease-out;
  ${props => css`
    background-color: ${props.color};
  `};
`;

export const PasswordStrengthText = styled.p`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: bold;
`;
