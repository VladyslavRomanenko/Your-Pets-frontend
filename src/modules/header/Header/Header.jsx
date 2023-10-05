import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Headers, HeaderNav, HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Headers>
        <HeaderNav>
          <Logo />
          <Navigation />
          <ButtonMenu />
        </HeaderNav>
      </Headers>
    </HeaderContainer>
  );
};
