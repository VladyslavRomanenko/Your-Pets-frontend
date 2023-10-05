import PropTypes from "prop-types";
import icon from "../../../shared/icons/sprite.svg";
import { LogoLink, LogoSvg } from "./Logo.styled";

export const Logo = ({ variant, onClick }) => {
  return (
    <LogoLink
      to="/"
      onClick={variant === "menu" ? onClick : null}
      aria-label="Your pet logo"
    >
      <LogoSvg>
        <use xlinkHref={icon + "#icon-logo"}></use>
      </LogoSvg>
    </LogoLink>
  );
};

Logo.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
