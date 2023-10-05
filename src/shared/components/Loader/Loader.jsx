import PropTypes from "prop-types";
import { AjaxLoader, PawStyled } from "./Loader.styled";
import sprite from "../../icons/sprite.svg";

export const Loader = ({ type }) => {
  return (
    <AjaxLoader $type={type}>
      <PawStyled $type={type}>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled $type={type}>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled $type={type}>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled $type={type}>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled $type={type}>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled $type={type}>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
    </AjaxLoader>
  );
};

Loader.propTypes = {
  type: PropTypes.string,
};
