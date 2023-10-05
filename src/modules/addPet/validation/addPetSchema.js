import * as yup from "yup";
import { nameValidator, cityValidator } from "@/shared/constants/regexp";

export const categorySchema = yup.object().shape({
  category: yup.string().required("Choose one of the options"),
});

export const sellSchema = yup.object().shape({
  title: yup
    .string()
    .min(8, "the title must contain a minimum of 8 characters")
    .max(50, "the title must contain a maximum of 50 characters")
    .required("required field"),
  name: yup
    .string()
    .required("required field")
    .matches(nameValidator, "the name must contain only letters")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(30, "the name must contain a maximum of 30 characters"),
  date: yup
    .date()
    .required("required field")
    .test("is-in-the-past", "Date must be current or in the past", (value) => {
      if (!value) return true;
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate <= currentDate;
    }),
  type: yup
    .string()
    .required("required field")
    .min(2, "the type must contain a minimum of 2 characters")
    .max(50, "the type must contain a maximum of 50 characters"),
});

export const detailsSchema = yup.object().shape({
  name: yup
    .string()
    .required("required field")
    .matches(nameValidator, "the name must contain only letters")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(30, "the name must contain a maximum of 30 characters"),
  date: yup
    .date()
    .required("required field")
    .test("is-in-the-past", "Date must be current or in the past", (value) => {
      if (!value) return true;
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate <= currentDate;
    }),
  type: yup
    .string()
    .required("required field")
    .min(2, "the type must contain a minimum of 2 characters")
    .max(50, "the type must contain a maximum of 50 characters"),
});

export const moreInfoOwnSchema = yup.object().shape({
  file: yup
    .mixed()
    .test("fileSize", "The file size must not exceed 3 MB", (value) => {
      return value && value.size <= 3 * 1024 * 1024;
    })
    .test("fileType", "Available image formats: JPG, JPEG, PNG", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    })
    .required("Add a photo"),
  comments: yup
    .string()
    .max(120, "the comments must contain a maximum of 120 characters"),
});

export const moreInfoSellSchema = yup.object().shape({
  sex: yup.string().required("Choose one of the options"),
  location: yup
    .string()
    .matches(
      cityValidator,
      "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
    )
    .required("Location field is required"),
  file: yup
    .mixed()
    .test("fileSize", "The file size must not exceed 3 MB", (value) => {
      return value && value.size <= 3 * 1024 * 1024;
    })
    .test("fileType", "Available image formats: JPG, JPEG, PNG", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    })
    .required("Add a photo"),
  price: yup.number().required("required field").positive().min(1),
  comments: yup
    .string()
    .max(120, "the comments must contain a maximum of 120 characters"),
});

export const notForSellSchema = yup.object().shape({
  sex: yup.string().required("Choose one of the options"),
  location: yup
    .string()
    .matches(
      cityValidator,
      "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
    )
    .required("Location field is required"),
  file: yup
    .mixed()
    .test("fileSize", "The file size must not exceed 3 MB", (value) => {
      return value && value.size <= 3 * 1024 * 1024;
    })
    .test("fileType", "Available image formats: JPG, JPEG, PNG", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    })
    .required("Add a photo"),
  comments: yup
    .string()
    .max(120, "the comments must contain a maximum of 120 characters"),
});
