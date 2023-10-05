import { LinkStyles, List } from "./AuthNav.styled";
import icon from "../../../shared/icons/sprite.svg";
import PropTypes from "prop-types";

const routes = [
  { path: "/login", text: "Log IN", type: "login" },
  { path: "/register", text: "Registration", type: "register" },
];

export const AuthNav = ({ variant = null, onClick }) => {
  const variantCheck = variant === "menu" || variant === "tabletMenu";

  const handleClick = () => {
    document.body.style.overflow = "auto";
    if (variantCheck) {
      onClick();
    }
  };

  return (
    <List $variant={variant}>
      {routes.map((route) => (
        <li key={route.path}>
          <LinkStyles to={route.path} $type={route.type} onClick={handleClick}>
            <span>{route.text}</span>
            {route.path === "/login" && (
              <svg>
                <use href={icon + "#pawprint"}> </use>
              </svg>
            )}
          </LinkStyles>
        </li>
      ))}
    </List>
  );
};

AuthNav.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
