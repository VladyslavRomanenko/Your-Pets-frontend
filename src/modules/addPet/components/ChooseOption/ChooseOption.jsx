import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { FormError } from "../../../authForm/components/FormError/FormError";
import { categorySchema } from "../../validation/addPetSchema";
import { PetFormButtons } from "../PetFormButtons/PetFormButtons";

import { addPetFormData, updateStep } from "@/redux/notices/noticesSlice";
import { selectPetFormData } from "@/redux/notices/noticesSelectors";

import {
  OptionsWrapper,
  RadioWrapper,
  SelectRadio,
  StyledRadio,
} from "./ChooseOption.styled";
import { updateBackLocation } from "../../../../redux/global/globalSlice";
import { useEffect } from "react";

const ChooseOption = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petFormData = useSelector(selectPetFormData);
  const selectedCategory = petFormData?.category;

  const location = useLocation();
  const locationRef = useRef(location?.state?.from);
  const cancelLinkLocation = locationRef?.current?.pathname || "/user";

  useEffect(() => {
    dispatch(updateBackLocation(cancelLinkLocation));
  }, [cancelLinkLocation, dispatch]);

  const initialValues = {
    category: selectedCategory ? selectedCategory : "",
  };

  const handleSubmit = (values) => {
    const { category } = values;

    dispatch(addPetFormData({ category }));
    dispatch(updateStep(2));
    navigate(`/add-pet/details`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={categorySchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, touched, errors }) => (
        <RadioWrapper autoComplete="off" id="categoryForm">
          <OptionsWrapper>
            <div>
              <SelectRadio
                className={values?.category === "own" ? "checked" : ""}
              >
                <StyledRadio
                  type="radio"
                  name="category"
                  value="own"
                  checked={values?.category === "own"}
                  onChange={handleChange}
                />
                your pet
              </SelectRadio>
            </div>
            <div>
              <SelectRadio
                className={values?.category === "sell" ? "checked" : ""}
              >
                <StyledRadio
                  type="radio"
                  name="category"
                  value="sell"
                  checked={values?.category === "sell"}
                  onChange={handleChange}
                />
                sell
              </SelectRadio>
            </div>
            <div>
              <SelectRadio
                className={values?.category === "lost-found" ? "checked" : ""}
              >
                <StyledRadio
                  type="radio"
                  name="category"
                  value="lost-found"
                  checked={values?.category === "lost-found"}
                  onChange={handleChange}
                />
                lost/found
              </SelectRadio>
            </div>
            <div>
              <SelectRadio
                className={
                  values?.category === "in-good-hands" ? "checked" : ""
                }
              >
                <StyledRadio
                  type="radio"
                  name="category"
                  value="in-good-hands"
                  checked={values?.category === "in-good-hands"}
                  onChange={handleChange}
                />
                in good hands
              </SelectRadio>
            </div>

            <FormError name="category" touched={touched} errors={errors} />
          </OptionsWrapper>

          <PetFormButtons
            btnText="Next"
            linkText="Cancel"
            backLinkLocation={cancelLinkLocation}
            location={location}
          />
        </RadioWrapper>
      )}
    </Formik>
  );
};

export default ChooseOption;
