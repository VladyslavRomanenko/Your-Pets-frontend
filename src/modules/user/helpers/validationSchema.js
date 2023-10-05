import * as Yup from "yup";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  cityValidator,
} from "../../../shared/constants/regexp";

export const userValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("The 'Name' field is required")
    .matches(nameValidator, "Name must contain only letters and spaces"),

  email: Yup.string()
    .matches(emailValidator, "Invalid email format")
    .required("The field 'Email' is required"),

  birthday: Yup.date()
    .required("required field")
    .test("is-in-the-past", "Date must be current or in the past", (value) => {
      if (!value) return true;
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate <= currentDate;
    }),

  phone: Yup.string()
    .required("The 'Phone' field is required")
    .matches(phoneValidator, "Incorrect phone format. Example: +380671234567"),

  city: Yup.string()
    .matches(
      cityValidator,
      "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
    )
    .required("The 'City' field is required"),
});

export const userAvatarValidationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required("Download avatar is required")
    .test("fileSize", "Avatar size must not exceed 3 MB", (value) => {
      if (!value) return true;
      return value.size <= 3000000;
    }),
});
