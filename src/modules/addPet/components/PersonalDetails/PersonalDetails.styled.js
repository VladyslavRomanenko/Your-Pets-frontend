import styled from "styled-components";
import { Field, Form } from "formik";

export const SellForm = styled(Form)``;

export const WrapperField = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const FieldStyled = styled(Field)`
  display: block;
  margin-top: 4px;

  padding: 12px 16px;
  width: 264px;
  height: 40px;

  outline: none;
  border-radius: ${({ theme }) => theme.radii.l};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.grey};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0.64px;
  @media screen and (min-width: 768px) {
    height: 48px;
    width: 394px;
  }

  &.error {
    border-color: ${({ theme }) =>
      theme.colors.red}; // Красный бордер при ошибке
  }

  &.success {
    border-color: ${({ theme }) =>
      theme.colors.green}; // Зеленый бордер при успешной валидации
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  /* letter-spacing: 1.44px; */

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;
