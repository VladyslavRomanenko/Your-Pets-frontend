import styled from 'styled-components';

export const IndicatorWrapper = styled.div`
  height: ${({ theme }) => theme.spacing(0.5)};
  background-color: ${props => (props.$passwordsMatch ? 'green' : 'red')};
  transition: all 0.4s ease-out;
`;
