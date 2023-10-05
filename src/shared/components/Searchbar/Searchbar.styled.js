import styled from "styled-components";

export const SearchForm = styled.form`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  height: ${({ theme }) => theme.spacing(11)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(6)};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  padding: 10px 12px 10px 20px;

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(152)};
    border-radius: ${({ theme }) => theme.spacing(5)};
    padding: 10px 20px;
  }
`;

export const SearchFormInput = styled.input`
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey};

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
  letter-spacing: 0.56px;

  padding: 0;

  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: 0.8px;
  }
`;

export const SearchButton = styled.button`
  display: block;
  height: ${({ theme }) => theme.spacing(6)};

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const ButtonIcon = styled.svg`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  fill: ${({ theme }) => theme.colors.blue};
`;

export const DeleteButton = styled.button`
  display: block;
  height: ${({ theme }) => theme.spacing(6)};

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const DeleteIcon = styled.svg`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  stroke: ${({ theme }) => theme.colors.yellow};
`;
