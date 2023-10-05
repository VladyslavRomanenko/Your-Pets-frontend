import styled from "styled-components";

import { StyledContainer } from "../../shared/components/Container/Container.styled";

export const RegisterPageWrapper = styled(StyledContainer)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};

  @media only screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};
  }
`;
