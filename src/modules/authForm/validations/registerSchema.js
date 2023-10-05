import * as yup from "yup";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from "@/shared/constants/regexp";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("required field")
    .matches(nameValidator, "the name must contain only letters")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(16, "the name must contain a maximum of 16 characters"),
  email: yup
    .string()
    .matches(emailValidator, "Please enter a valid email address")
    .required("required field"),

  password: yup
    .string()
    .required("required field")
    .min(6, "Password must contain at least 6 characters")
    .max(12, "maximum 12 characters possible")
    .matches(
      passwordValidator,
      "Minimum 1 uppercase letter, 1 lowercase letter and 1 number"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
