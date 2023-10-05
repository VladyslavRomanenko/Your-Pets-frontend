import PropTypes from "prop-types";
import { UserForm } from "../UserForm/UserForm";
import Icons from "../../../../shared/icons/sprite.svg";
import { EditUserBtn, EditSvg, CrossSvg } from "./UserData.styled";

export const UserData = ({ editing, handleEditClick }) => {
  return (
    <>
      <EditUserBtn onClick={handleEditClick}>
        {!editing ? (
          <EditSvg width="24px" height="24px">
            <use href={Icons + "#edit-2"}></use>
          </EditSvg>
        ) : (
          <CrossSvg width="24px" height="24px">
            <use href={Icons + "#cross-small"}></use>
          </CrossSvg>
        )}
      </EditUserBtn>
      <UserForm editing={editing} handleEditClick={handleEditClick} />
    </>
  );
};

UserData.propTypes = {
  editing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
