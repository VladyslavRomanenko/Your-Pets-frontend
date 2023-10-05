import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import {
  StyledUserNav,
  UserName,
  UserNavIcon,
  UserNavLink,
} from "./UserNav.styled";
import { Logout } from "../../../shared/components/Logout/Logout";
import sprite from "@/shared/icons/sprite.svg";

export const UserNav = ({ variant = "", onClick, type = "" }) => {
  const user = useSelector(selectUser);

  const variantCheck = variant === "menu" || variant === "tabletMenu";

  return (
    <StyledUserNav $variant={variant}>
      <Logout
        variant="header"
        type={variant === "tabletMenu" ? "tabletMenu" : null}
        onMenuClose={variant === "tabletMenu" ? onClick : null}
      />
      <UserNavLink
        $variant={variant}
        to="/user"
        onClick={variantCheck ? onClick : null}
      >
        <UserNavIcon width={28} height={28}>
          <use href={sprite + "#user-1"}></use>
        </UserNavIcon>
        <UserName $variant={variant}>{user?.name}</UserName>
      </UserNavLink>
      <Logout variant="menu" type={type} onMenuClose={onClick} />
    </StyledUserNav>
  );
};

UserNav.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
};
