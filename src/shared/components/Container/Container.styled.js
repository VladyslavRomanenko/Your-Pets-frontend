import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 480px;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;
