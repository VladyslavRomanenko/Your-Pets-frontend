import PropTypes from 'prop-types';

import { LinkStyled, TextStyled } from './TextWithRouterLink.styled';

export const TextWithRouterLink = ({ text, linkText, linkTo }) => {
  return (
    <TextStyled>
      {text}
      <LinkStyled to={linkTo}>{linkText}</LinkStyled>
    </TextStyled>
  );
};

TextWithRouterLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
