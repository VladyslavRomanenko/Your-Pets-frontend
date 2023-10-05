import styled, { css } from "styled-components";
import { Field, Form } from "formik";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperField = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  align-items: baseline;
`;

export const RadioContainer = styled.div`
  margin-top: 16px;
`;

export const RadioParag = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledRadio = styled(Field)`
  display: none;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: normal;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.64px;
  color: ${({ theme }) => theme.colors.grey};
  backdrop-filter: blur(2px);
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.l};
  border-color: ${({ theme }) => theme.colors.blue};
  outline: none;
  transition: transform ${({ theme }) => theme.transitions.regular};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.blueGradient};
    color: ${({ theme }) => theme.colors.white};
  }
  input[type="radio"]:checked + & {
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
  &.checked svg {
    stroke: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
  }
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  gap: 14px;
  @media screen and (min-width: 768px) {
    ${({ $isOwn }) =>
      $isOwn
        ? `
        flex-direction: row;
      flex-wrap: wrap
      margin-bottom: 60px;
      margin-top: 30px;
        `
        : `
      flex-direction: column;
      gap: 10px;
      align-items: baseline;
      margin-top: 28px;
      margin-bottom: 20px;  
        `}
  }
`;

export const FieldComentStyled = styled(Field)`
  display: block;
  margin-top: 4px;
  word-wrap: break-word;
  resize: none;

  padding: 12px 16px;
  width: 264px;
  height: 98px;

  outline: none;
  border-radius: ${({ theme }) => theme.radii.s};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.grey};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0.64px;

  &.error {
    border-color: ${({ theme }) =>
      theme.colors.red}; // Красный бордер при ошибке
  }

  &.success {
    border-color: ${({ theme }) =>
      theme.colors.green}; // Зеленый бордер при успешной валидации
  }
  @media screen and (min-width: 769px) {
    width: 393px;
    height: ${({ category }) =>
      category === "lost-found" || category === "in-good-hands"
        ? "182px"
        : "79px"};
  }
`;

export const FileInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.$imageUrl &&
    css`
      background-image: url(${props.$imageUrl});
    `}

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 112px;
  height: 112px;
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 0.64px;
  max-width: 90px;

  @media screen and (min-width: 768px) {
    max-width: 220px;
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;

export const ImgSexContainer = styled.div``;

export const FieldContainer = styled.div`
  @media screen and (min-width: 768px) {
  }
  ${{}}
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    ${({ $isOwn }) =>
      $isOwn
        ? `
          display: flex;
          gap: 15px;
          align-items: baseline;
          flex-direction: column;
        `
        : `
          display: flex;
          gap: 15px;
          align-items: baseline;
          flex-direction: row;
        `};
  }

  @media screen and (min-width: 1280px) {
    ${({ $isOwn }) =>
      $isOwn
        ? `
          display: flex;
          gap: 20px;
          flex-direction: column;
        `
        : `
          display: flex;
          gap: 50px;
          flex-direction: row;
        `};
  }
`;

export const IconFemale = styled.svg`
  height: 24px;
  width: 24px;
  stroke: ${({ theme }) => theme.colors.red};
  fill: transparent;
`;

export const IconMale = styled.svg`
  height: 24px;
  width: 24px;
  stroke: ${({ theme }) => theme.colors.blue};
  fill: transparent;
`;

export const IconPlus = styled.svg`
  display: ${({ $visible }) => ($visible === "yes" ? "block" : "none")};
  height: 80px;
  width: 80px;
  stroke: ${({ theme }) => theme.colors.blue};
  fill: transparent;
`;
