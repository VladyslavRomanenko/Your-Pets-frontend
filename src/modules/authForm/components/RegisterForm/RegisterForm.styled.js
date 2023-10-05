import { WrapperForm } from "../LoginForm/LoginForm.styled";

import styled from "styled-components";

export const WrapperFormReg = styled(WrapperForm)`
  padding: 60px 62px;
`;

export const WrapperField = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3.5)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(13)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;
