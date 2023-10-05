import PropTypes from 'prop-types';
import { ErrorIcon, SuccessIcon } from './FormFieldIcon.styled';
import sprite from '@/shared/icons/sprite.svg';

export const FormFieldIcon = ({ touched, error, right }) => {
  if (touched && error) {
    return (
      <ErrorIcon $right={right} width="24" height="24">
        <use href={sprite + '#cross-small'}></use>
      </ErrorIcon>
    );
  }

  if (touched && !error) {
    return (
      <SuccessIcon $right={right} width="24" height="24">
        <use href={sprite + '#check'}></use>
      </SuccessIcon>
    );
  }

  return null;
};

FormFieldIcon.propTypes = {
  error: PropTypes.string,
  right: PropTypes.string,
  touched: PropTypes.bool,
};
