import styled from "styled-components";
import { StyledContainer } from "../../../shared/components/Container/Container.styled";

export const HeaderContainer = styled(StyledContainer)`
  padding-bottom: 0;
`;

export const Headers = styled.header`
  padding-top: 20px;

  @media only screen and (min-width: 768px) {
    padding-top: 24px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
