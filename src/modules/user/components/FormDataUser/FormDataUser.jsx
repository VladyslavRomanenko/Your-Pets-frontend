import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  formatBirthday,
  formatSubmitBirthday,
} from "../../helpers/formatBirthday";
import { selectUser } from "../../../../redux/auth/authSelectors";
import { userValidationSchema } from "../../helpers/validationSchema";
import { updateUserDataThunk } from "../../../../redux/auth/authOperations";
import Button from "../../../../shared/components/Button/Button";
import {
  FormContainer,
  FormTitle,
  FormValidation,
  ProfileForm,
  UserInput,
  UserLabel,
} from "./FormDataUser.styled";

export const FormDataUser = ({ editing, handleEditClick }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
    birthday: formatBirthday(user?.birthday) || "",
    phone: user?.phone || "",
    city: user?.city || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      const newValues = {
        ...values,
        birthday: values.birthday ? formatSubmitBirthday(values.birthday) : "",
      };

      dispatch(updateUserDataThunk(newValues))
        .unwrap()
        .then(() => {
          handleEditClick();
          toast.success("Personal data updated successfully");
        })
        .catch((error) => {
          if (error.includes("E11000")) {
            toast.error("This email is already in use");
          } else {
            toast.error(error);
          }
        });
    },
  });
  const { name, email, birthday, phone, city } = formik.values;

  return (
    <>
      <ProfileForm onSubmit={formik.handleSubmit}>
        <FormContainer>
          <UserLabel htmlFor="name">
            <FormTitle>Name:</FormTitle>
            <UserInput
              type="text"
              name="name"
              placeholder="Anna"
              autoComplete="off"
              defaultValue={editing ? name : user?.name}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.name && formik.errors.name ? (
              <FormValidation>{formik.errors.name}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="email">
            <FormTitle>Email:</FormTitle>
            <UserInput
              type="email"
              name="email"
              placeholder="anna00@gmail.com"
              defaultValue={editing ? email : user?.email}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.email && formik.errors.email ? (
              <FormValidation>{formik.errors.email}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="birthday">
            <FormTitle>Birthday:</FormTitle>
            <UserInput
              type="date"
              name="birthday"
              defaultValue={editing ? birthday : formatBirthday(user?.birthday)}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <FormValidation>{formik.errors.birthday}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="phone">
            <FormTitle>Phone:</FormTitle>
            <UserInput
              type="tel"
              name="phone"
              placeholder="+38000000000"
              defaultValue={editing ? phone : user?.phone}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <FormValidation>{formik.errors.phone}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="city">
            <FormTitle>City:</FormTitle>
            <UserInput
              type="text"
              name="city"
              placeholder="Kyiv"
              defaultValue={editing ? city : user?.city}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.city && formik.errors.city ? (
              <FormValidation>{formik.errors.city}</FormValidation>
            ) : null}
          </UserLabel>
        </FormContainer>

        {editing && <Button text="Save" type="submit" variant="Save" />}
      </ProfileForm>
    </>
  );
};

FormDataUser.propTypes = {
  editing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
