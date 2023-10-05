import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import {
  selectAuthLoading,
  selectUser,
} from "../../../../redux/auth/authSelectors";
import { userAvatarValidationSchema } from "../../helpers/validationSchema";
import { updateAvatarThunk } from "../../../../redux/auth/authOperations";
import {
  Avatar,
  CheckPhotoSvg,
  CrossPhotoSvg,
  EditPhoto,
  FormValidation,
  PhotoSvg,
  SelectedPhoto,
} from "./FormAvatar.styled";
import Icons from "../../../../shared/icons/sprite.svg";

export const FormAvatar = ({ editing, handleEditClick }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthLoading);

  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      avatarURL: "",
    },
    validationSchema: userAvatarValidationSchema,
  });
  const { avatarURL } = formik.values;

  const handleAvatarSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatarURL", avatarURL);

    dispatch(updateAvatarThunk(formData))
      .unwrap()
      .then(() => {
        handleEditClick();
        toast.success("Avatar updated successfully");
      })
      .catch((error) => {
        toast.error(error);
      });

    formik.setValues({
      ...formik.values,
    });
  };

  return (
    <>
      <form onSubmit={handleAvatarSubmit}>
        <Avatar htmlFor="avatarURL">
          {editing ? (
            !avatarURL ? (
              <img src={user?.avatarURL} alt="User Avatar" />
            ) : (
              <img src={URL.createObjectURL(avatarURL)} alt="User photo" />
            )
          ) : (
            <img src={user?.avatarURL} alt="User Avatar" />
          )}

          {editing ? (
            <SelectedPhoto>
              <EditPhoto>
                {!avatarURL ? (
                  <>
                    <PhotoSvg>
                      <use href={Icons + "#camera"}></use>
                    </PhotoSvg>
                    <p> Edit photo</p>
                  </>
                ) : (
                  <>
                    <button type="submit">
                      <CheckPhotoSvg>
                        <use href={Icons + "#check"}></use>
                      </CheckPhotoSvg>
                      <p>{isLoading ? "Loading..." : "Confirm"}</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        URL.revokeObjectURL(URL.createObjectURL(avatarURL));
                        formik.setFieldValue("avatarURL", "");
                      }}
                    >
                      <CrossPhotoSvg>
                        <use href={Icons + "#cross-small"}></use>
                      </CrossPhotoSvg>
                    </button>
                  </>
                )}
              </EditPhoto>
              <input
                type="file"
                name="avatarURL"
                accept="image/*"
                onChange={(event) => {
                  formik.setFieldValue("avatarURL", event.target.files[0]);
                }}
              />
            </SelectedPhoto>
          ) : null}

          {formik.touched.avatarURL && formik.errors.avatarURL ? (
            <FormValidation>{formik.errors.avatarURL}</FormValidation>
          ) : null}
        </Avatar>
      </form>
    </>
  );
};

FormAvatar.propTypes = {
  editing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
