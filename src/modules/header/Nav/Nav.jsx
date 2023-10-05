import { List } from "./Nav.styled";
import { StyledLink } from "./Nav.styled";
import PropTypes from "prop-types";

export const Nav = ({ variant = null, onClick }) => {
  return (
    <List $variant={variant}>
      <li>
        <StyledLink
          to="/news"
          $variant={variant}
          onClick={variant === "menu" ? onClick : null}
        >
          News
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/notices/sell"
          $variant={variant}
          onClick={variant === "menu" ? onClick : null}
        >
          Find pet
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/friends"
          $variant={variant}
          onClick={variant === "menu" ? onClick : null}
        >
          Our friends
        </StyledLink>
      </li>
    </List>
  );
};

Nav.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
