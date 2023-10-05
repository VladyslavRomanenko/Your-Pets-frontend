import { Form } from "formik";
import styled from "styled-components";

export const RadioWrapper = styled(Form)`
  margin-top: 34px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 91px;

  @media screen and (min-width: 768px) {
    margin-bottom: 137px;
  }
`;

export const StyledRadio = styled.input`
  display: none;
`;

export const SelectRadio = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: normal;

  align-items: center;
  letter-spacing: 0.56px;

  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.lightBlue};
  backdrop-filter: blur(2px);
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.l};
  border-color: ${({ theme }) => theme.colors.blue};
  outline: none;
  transition: transform ${({ theme }) => theme.transitions.regular};
  cursor: pointer;

  input[type="radio"]:checked + & {
    background: ${({ theme }) => theme.colors.blueGradient};
    color: ${({ theme }) => theme.colors.white};
    &::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      margin-right: 5px;
    }
  }

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.blueGradient};
    color: ${({ theme }) => theme.colors.white};
  }
  &:focus svg,
  &:hover svg {
    stroke: ${({ theme }) => theme.colors.white};
  }

  &.checked {
    background: ${({ theme }) => theme.colors.blueGradient};
    color: ${({ theme }) => theme.colors.white};
  }
`;
