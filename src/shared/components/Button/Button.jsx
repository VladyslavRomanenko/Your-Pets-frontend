import PropTypes from "prop-types";
import { ButtonStyled, SvgStyled } from "./Button.styled";
import sprite from "../../icons/sprite.svg";

const Button = ({
  onClick = null,
  text,
  type = "button",
  icon = null,
  iconVariant = "",
  iconOnClick = null,
  variant = "bigButtonFirst",
  iconPosition = null,
  isButtonsVisible,
  disabled = false,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $variant={variant}
      $isButtonsVisible={isButtonsVisible}
      $loading={disabled}
      disabled={disabled}
    >
      {iconPosition === "left" && (
        <SvgStyled
          width="24"
          height="24"
          $iconVariant={iconVariant}
          onClick={iconOnClick}
        >
          <use href={`${sprite}#${icon}`}></use>
        </SvgStyled>
      )}
      {text}
      {iconPosition === "right" && (
        <SvgStyled
          width="24"
          height="24"
          $iconVariant={iconVariant}
          onClick={iconOnClick}
        >
          <use href={`${sprite}#${icon}`}></use>
        </SvgStyled>
      )}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconOnClick: PropTypes.func,
  iconPosition: PropTypes.string,
  iconVariant: PropTypes.string,
  isButtonsVisible: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};
