import styled from "styled-components";

export const WrapperForm = styled.div`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 8px 20px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  width: ${({ theme }) => theme.spacing(70)};

  border-radius: ${({ theme }) => theme.radii.l};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media screen and (min-width: 768px) {
    margin-top: 68px;
    padding: 20px 33px;
    width: ${({ $step, $categoryWidth }) =>
      $step === 3 && $categoryWidth !== "own" ? "704px" : "458px"};
    border-radius: ${({ theme }) => theme.radii.l};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 1280px) {
    width: ${({ $step, $categoryWidth }) =>
      $step === 3 && $categoryWidth !== "own" ? "822px" : "458px"};
    padding: ${({ $step, $categoryWidth }) =>
      $step === 3 && $categoryWidth !== "own" ? "20px 73px" : "20px 33px"};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
