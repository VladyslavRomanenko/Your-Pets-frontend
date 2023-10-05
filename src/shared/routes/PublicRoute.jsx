import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectLoggedIn } from "@/redux/auth/authSelectors";

export const PublicRoute = ({
  component: Component,
  redirectTo = "/",
  restricted = false,
}) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? (
    <Navigate to={location?.state?.from ?? redirectTo} />
  ) : (
    Component
  );
};

PublicRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};
