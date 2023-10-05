import PropTypes from 'prop-types';

import { IndicatorWrapper } from './ConfirmPasswordIndicator.styled';

export const ConfirmPasswordIndicator = ({ passwordsMatch, values: { confirmPassword } }) => {
  const width = passwordsMatch ? '87%' : '50%';
  return confirmPassword && <IndicatorWrapper $passwordsMatch={passwordsMatch} style={{ width }} />;
};

ConfirmPasswordIndicator.propTypes = {
  passwordsMatch: PropTypes.bool.isRequired,
};
