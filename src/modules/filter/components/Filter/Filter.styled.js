import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
`;

export const Filter2 = styled.div`
  z-index: 8;
  top: 43px;
  position: absolute;
  width: ${({ theme }) => theme.spacing(38)};
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radii.s};
`;

export const TitleFilter = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: 0.64px;
  color: ${({ theme }) => theme.colors.blue};
  z-index: 1;
`;

export const WrapperOpenOptions = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    transform: scale(1.07);
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 14px 14px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${({ theme }) => theme.radii.s};

  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 15.6px;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.blue};
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    transform: scale(1.07);
  }
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
`;

export const SvgCheck = styled.svg`
  position: absolute;
  top: 50%;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  transform: translateY(-50%);

  fill: transparent;
  stroke: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;
