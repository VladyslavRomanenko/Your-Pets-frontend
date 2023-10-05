import PropTypes from 'prop-types';
import sprite from '@/shared/icons/sprite.svg';
import { SvgStyled } from './TogglePasswordVisibility.styled';

export const TogglePasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <SvgStyled onClick={onToggle} width="24" height="24">
      {showPassword ? (
        <use href={sprite + '#eye-open'}></use>
      ) : (
        <use href={sprite + '#eye-closed'}></use>
      )}
    </SvgStyled>
  );
};

TogglePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
};
