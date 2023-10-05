import styled from "styled-components";

export const StyledList = styled.ul`
  padding: ${({ theme }) => theme.spacing(3)};

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-style: normal;
  width: ${({ theme }) => theme.spacing(30)};

  position: absolute;
  width: ${({ theme, $isActive }) => $isActive && theme.spacing(30)};
  height: ${({ theme, $isActive }) => $isActive && theme.spacing(40)};
  top: 10%;
  left: -80%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  border-radius: ${({ theme, $isActive }) => $isActive && theme.spacing(2)};
  background-color: ${({ theme, $isActive }) =>
    $isActive && theme.colors.white};
  color: ${({ theme, $isActive }) => $isActive && theme.colors.black};
  box-shadow: ${({ theme, $isActive }) => $isActive && theme.shadows.primary};
  border: ${({ theme, $isActive }) => $isActive && theme.borders.normal};
  border-color: ${({ theme, $isActive }) => $isActive && theme.colors.blue};

  @media only screen and (min-width: 768px) {
    top: 10%;
    left: -55%;
  }
  @media only screen and (min-width: 1280px) {
    top: 10%;
    left: -30%;
  }
`;

export const StyledDate = styled.div`
  position: relative;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
