import PropTypes from "prop-types";
import { FormAvatar } from "../FormAvatar/FormAvatar";
import { FormDataUser } from "../FormDataUser/FormDataUser";

export const UserForm = ({ editing, handleEditClick }) => {
  return (
    <>
      <FormAvatar editing={editing} handleEditClick={handleEditClick} />
      <FormDataUser editing={editing} handleEditClick={handleEditClick} />
    </>
  );
};

UserForm.propTypes = {
  editing: PropTypes.any,
  handleEditClick: PropTypes.any,
};
