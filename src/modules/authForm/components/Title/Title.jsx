import PropTypes from 'prop-types';
import { TitleStyled } from './Title.styled';

export const Title = ({ text }) => {
  return <TitleStyled>{text}</TitleStyled>;
};

Title.propTypes = {
  text: PropTypes.string,
};
