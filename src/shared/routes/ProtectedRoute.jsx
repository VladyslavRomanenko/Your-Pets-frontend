import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectLoggedIn } from "@/redux/auth/authSelectors";

export const ProtectedRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    Component
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
};
