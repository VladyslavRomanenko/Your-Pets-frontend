import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../../redux/auth/authSlice";

const GoogleAuth = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const user = {
      email: searchParams.get("email"),
      token: searchParams.get("token"),
      name: searchParams.get("name"),
      refreshToken: searchParams.get("refreshToken"),
    };

    dispatch(updateUser(user));
    navigate("/user");
  }, [dispatch, location.search, navigate]);

  return <></>;
};

export default GoogleAuth;
