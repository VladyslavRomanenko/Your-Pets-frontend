import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "@/redux/auth/authSelectors";
import { BurgerHeader, Button, Div, Svgsmall } from "./BurgerMenu.styled";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import icon from "@/shared/icons/sprite.svg";
import { Logo } from "../Logo/Logo";

export const BurgerMenu = ({ onClick, isOpen = false }) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <Div className={isOpen ? "open" : "closed"}>
        <BurgerHeader>
          <Logo variant="menu" onClick={onClick} />

          {isLoggedIn ? (
            <UserNav variant="tabletMenu" onClick={onClick} />
          ) : (
            <AuthNav variant="tabletMenu" onClick={onClick} />
          )}

          <Button onClick={onClick} aria-label="Close mobile menu button">
            <Svgsmall width={24} height={24}>
              <use xlinkHref={icon + "#cross-small"}></use>
            </Svgsmall>
          </Button>
        </BurgerHeader>

        {isLoggedIn ? (
          <UserNav variant="menu" onClick={onClick} type="burger" />
        ) : (
          <AuthNav variant="menu" onClick={onClick} />
        )}

        <Nav variant="menu" onClick={onClick} />
      </Div>
    </>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
