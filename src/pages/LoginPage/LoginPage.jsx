import { useSelector } from "react-redux";
import { LoginForm } from "@/modules/authForm/components/LoginForm/LoginForm";
import { Loader } from "@/shared/components/Loader/Loader";
import { selectAuthLoading } from "@/redux/auth/authSelectors";
import { RegisterPageWrapper } from "../RegisterPage/RegisterPage.styled";
import { BackgroundImgWrapper } from "../../shared/styles/styled components/BackgroundImgWrapper.styled";

const LoginPage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BackgroundImgWrapper>
          <RegisterPageWrapper>
            <LoginForm />
          </RegisterPageWrapper>
        </BackgroundImgWrapper>
      )}
    </>
  );
};

export default LoginPage;
