import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import { addPetFormData, updateStep } from "@/redux/notices/noticesSlice";
import { selectPetFormData } from "@/redux/notices/noticesSelectors";
import {
  moreInfoOwnSchema,
  moreInfoSellSchema,
  notForSellSchema,
} from "../../validation/addPetSchema";

import {
  FieldComentStyled,
  FieldContainer,
  FileInput,
  FileInputContainer,
  FileWrapper,
  FlexContainer,
  FormContainer,
  IconFemale,
  IconMale,
  IconPlus,
  ImgSexContainer,
  RadioContainer,
  RadioLabel,
  RadioParag,
  RadioWrapper,
  StyledLabel,
  StyledRadio,
  WrapperField,
} from "./MoreInfo.styled";
import { FieldStyled } from "../PersonalDetails/PersonalDetails.styled";
import sprite from "@/shared/icons/sprite.svg";
import { PetFormButtons } from "../PetFormButtons/PetFormButtons";
import { FormError } from "../../../authForm/components/FormError/FormError";
import {
  addNewNoticeThunk,
  addNewPetThunk,
} from "@/redux/notices/noticesOperations";
import { toast } from "react-toastify";
import { petFormDataInitialState } from "@/redux/notices/noticesSlice";
import { selectBackLocation } from "@/redux/global/globalSelectors";
import { updateBackLocation } from "@/redux/global/globalSlice";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const petFormData = useSelector(selectPetFormData);
  const backLocation = useSelector(selectBackLocation);

  const initialValues = {
    sex: petFormData?.sex ? petFormData?.sex : "",
    location: petFormData?.location ? petFormData?.location : "",
    price: petFormData?.price ? petFormData?.price : "",
    file: petFormData?.file ? petFormData?.file : null,
    comments: petFormData?.comments ? petFormData?.comments : "",
  };

  const handleSubmit = (values) => {
    const newValues = {
      location: values.location.trim(),
      price: values.price.trim(),
      comments: values.comments.trim(),
    };

    const formDataToSend = {
      ...petFormData,
      ...values,
      ...newValues,
    };

    const formData = new FormData();

    Object.keys(formDataToSend).forEach((key) => {
      if (formDataToSend[key] !== "") {
        formData.append(key, formDataToSend[key]);
      }

      if (key === "category" && petFormData?.category === "own") {
        formData.append(key, formDataToSend[key]);
        formData.delete("category", formDataToSend[key]);
      }
    });

    if (petFormData?.category === "own") {
      dispatch(addNewPetThunk(formData))
        .unwrap()
        .then(() => {
          dispatch(addPetFormData(petFormDataInitialState));
          dispatch(updateStep(1));
          dispatch(updateBackLocation(""));
          navigate(`${backLocation}`);
        })
        .catch((error) => toast.error(error));
    } else {
      dispatch(addNewNoticeThunk(formData))
        .unwrap()
        .then(() => {
          dispatch(addPetFormData(petFormDataInitialState));
          dispatch(updateStep(1));
          dispatch(updateBackLocation(""));
          navigate(`${backLocation}`);
        })
        .catch((error) => toast.error(error));
    }
  };

  const determineSchema = (category) => {
    switch (category) {
      case "sell":
        return moreInfoSellSchema;

      case "own":
        return moreInfoOwnSchema;

      default:
        return notForSellSchema;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={determineSchema(petFormData?.category)}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, setFieldValue, touched, errors }) => (
        <FormContainer>
          <FlexContainer $isOwn={petFormData?.category === "own"}>
            <ImgSexContainer>
              {petFormData?.category !== "own" && (
                <RadioContainer>
                  <RadioParag>Sex</RadioParag>
                  <RadioWrapper>
                    <RadioLabel
                      className={
                        values?.sex === "female" ? "checked" : "unchecked"
                      }
                    >
                      <StyledRadio
                        type="radio"
                        id="female"
                        name="sex"
                        value="female"
                        checked={values?.sex === "female"}
                        onChange={handleChange}
                      />
                      <IconFemale>
                        <use href={sprite + "#female"}></use>
                      </IconFemale>
                      Female
                    </RadioLabel>
                    <RadioLabel
                      className={
                        values?.sex === "male" ? "checked" : "unchecked"
                      }
                    >
                      <StyledRadio
                        type="radio"
                        name="sex"
                        value="male"
                        checked={values?.sex === "male"}
                        onChange={handleChange}
                      />
                      <IconMale>
                        <use href={sprite + "#male"}></use>
                      </IconMale>
                      Male
                    </RadioLabel>
                  </RadioWrapper>
                  <FormError name="sex" touched={touched} errors={errors} />
                </RadioContainer>
              )}
              <FileWrapper $isOwn={petFormData?.category === "own"}>
                <StyledLabel>Load the pet&apos;s image:</StyledLabel>
                <FileInputContainer
                  $imageUrl={
                    values?.file ? URL.createObjectURL(values?.file) : ""
                  }
                >
                  <FileInput
                    type="file"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(event) => {
                      setFieldValue("file", event.target.files[0]);
                    }}
                    autoComplete="off"
                  />
                  <IconPlus $visible={values?.file ? "no" : "yes"}>
                    <use href={sprite + "#plus"}></use>
                  </IconPlus>
                </FileInputContainer>
              </FileWrapper>
              <FormError name="file" touched={touched} errors={errors} />
            </ImgSexContainer>

            <FieldContainer>
              {petFormData?.category !== "own" && (
                <WrapperField>
                  <StyledLabel>Location:</StyledLabel>
                  <FieldStyled
                    type="text"
                    name="location"
                    placeholder="Enter location"
                  />
                  <FormError
                    name="location"
                    touched={touched}
                    errors={errors}
                  />
                </WrapperField>
              )}

              {petFormData?.category === "sell" && (
                <WrapperField>
                  <StyledLabel>Price:</StyledLabel>
                  <FieldStyled type="text" name="price" placeholder="Price" />
                  <FormError name="price" touched={touched} errors={errors} />
                </WrapperField>
              )}
              <WrapperField>
                <StyledLabel>Comments:</StyledLabel>
                <FieldComentStyled
                  category={petFormData?.category}
                  type="text"
                  name="comments"
                  placeholder="Comments"
                  autoComplete="off"
                  component="textarea"
                />
                <FormError name="comments" touched={touched} errors={errors} />
              </WrapperField>
            </FieldContainer>
          </FlexContainer>
          <PetFormButtons
            btnText="Done"
            linkText="Back"
            backLinkLocation="/add-pet/details"
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default MoreInfo;
