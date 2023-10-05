import PropTypes from "prop-types";
import { StyledPageTitle } from "./PageTitle.styled";

export const PageTitle = ({ title }) => {
  return <StyledPageTitle>{title}</StyledPageTitle>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
