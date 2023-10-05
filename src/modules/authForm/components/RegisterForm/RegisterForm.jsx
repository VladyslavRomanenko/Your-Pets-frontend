import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FormError } from "../FormError/FormError";
import { IndicatorPasswordStrenght } from "../IndicatorPasswordStrenght/IndicatorPasswordStrenght";
import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";
import { ConfirmPasswordIndicator } from "../ConfirmPasswordIndicator/ConfirmPasswordIndicator";
import { Title } from "../Title/Title";
import { TextWithRouterLink } from "../TextWithRouterLink/TextWithRouterLink";
import Button from "@/shared/components/Button/Button";
import { WrapperField } from "./RegisterForm.styled";
import { FormFieldIcon } from "../FormFieldIcon/FormFieldIcon";

import { getClassName } from "../../helpers/getClassName";
import { usePasswordToggle } from "@/hooks/usePasswordToggle";
import { registerSchema } from "@/modules/authForm/validations/registerSchema";
import { setIsSuccess } from "@/redux/global/globalSlice";
import { registerThunk } from "@/redux/auth/authOperations";

import {
  WrapperМessages,
  FieldStyled,
  FormStyled,
  WrapperButton,
  WrapperForm,
  WrapperAbsoluteMessages,
  WrapperAbsoluteEye,
} from "../LoginForm/LoginForm.styled";
import { loginThunk } from "../../../../redux/auth/authOperations";
import { GoogleAuthLink } from "../../../../shared/components/GoogleAuthLink/GoogleAuthLink";

export const RegisterForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    "password1",
    "password2",
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (value, { resetForm }) => {
    const { name, email, password } = value;
    dispatch(
      registerThunk({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      })
    )
      .unwrap()
      .then(() => {
        dispatch(loginThunk({ email: email.trim(), password: password.trim() }))
          .unwrap()
          .then(() => {
            dispatch(setIsSuccess(true));

            navigate("/user");
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        toast.error(error);
      });
    resetForm();
  };

  return (
    <WrapperForm>
      <Title text="Registration" />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <FormStyled autoComplete="off">
            <WrapperField>
              <WrapperAbsoluteMessages>
                <FieldStyled
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  required
                  className={getClassName(touched.name, errors.name)}
                />
                <FormFieldIcon touched={touched.name} error={errors.name} />
                <WrapperМessages>
                  <FormError name="name" touched={touched} errors={errors} />
                </WrapperМessages>
              </WrapperAbsoluteMessages>
              <WrapperAbsoluteMessages>
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                  className={getClassName(touched.email, errors.email)}
                />
                <FormFieldIcon touched={touched.email} error={errors.email} />

                <WrapperМessages>
                  <FormError name="email" touched={touched} errors={errors} />
                </WrapperМessages>
              </WrapperAbsoluteMessages>
              <WrapperAbsoluteMessages>
                <WrapperAbsoluteEye>
                  <FieldStyled
                    type={showPasswords.password1 ? "text" : "password"}
                    name="password"
                    title="Enter the password more difficult, letter, digit, capital letter."
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    className={getClassName(touched.password, errors.password)}
                  />
                  <FormFieldIcon
                    touched={touched.password}
                    error={errors.password}
                    right="52px"
                  />

                  <TogglePasswordIcon
                    showPassword={showPasswords.password1}
                    onToggle={() => togglePasswordVisibility("password1")}
                  />
                </WrapperAbsoluteEye>
                <WrapperМessages>
                  <IndicatorPasswordStrenght values={values} />
                  <FormError
                    name="password"
                    touched={touched}
                    errors={errors}
                  />
                </WrapperМessages>
              </WrapperAbsoluteMessages>
              <WrapperAbsoluteMessages>
                <WrapperAbsoluteEye>
                  <FieldStyled
                    type={showPasswords.password2 ? "text" : "password"}
                    name="confirmPassword"
                    title="Enter the password more difficult, letter, digit, capital letter."
                    placeholder="Confirm Password"
                    autoComplete="off"
                    required
                    className={getClassName(
                      touched.confirmPassword,
                      errors.confirmPassword
                    )}
                  />
                  <FormFieldIcon
                    touched={touched.confirmPassword}
                    error={errors.confirmPassword}
                    right="52px"
                  />

                  <TogglePasswordIcon
                    showPassword={showPasswords.password2}
                    onToggle={() => togglePasswordVisibility("password2")}
                  />
                </WrapperAbsoluteEye>

                <WrapperМessages>
                  <ConfirmPasswordIndicator
                    values={values}
                    passwordsMatch={
                      values.password === values.confirmPassword &&
                      values.confirmPassword !== ""
                    }
                  />
                  <FormError name="confirmPassword" />
                </WrapperМessages>
              </WrapperAbsoluteMessages>
            </WrapperField>
            <WrapperButton>
              <Button type="submit" text="Registration" variant="authButton" />
              <TextWithRouterLink
                text="Already have an account?  "
                linkText="Login"
                linkTo="/login"
              />
            </WrapperButton>
            <GoogleAuthLink />
          </FormStyled>
        )}
      </Formik>
    </WrapperForm>
  );
};
