import { useSelector } from "react-redux";
import { RegisterForm } from "../../modules/authForm/components/RegisterForm/RegisterForm";
import { selectAuthLoading } from "@/redux/auth/authSelectors";

import { RegisterPageWrapper } from "./RegisterPage.styled";
import { Loader } from "@/shared/components/Loader/Loader";
import { BackgroundImgWrapper } from "../../shared/styles/styled components/BackgroundImgWrapper.styled";

const RegisterPage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BackgroundImgWrapper>
          <RegisterPageWrapper>
            <RegisterForm />
          </RegisterPageWrapper>
        </BackgroundImgWrapper>
      )}
    </>
  );
};

export default RegisterPage;
