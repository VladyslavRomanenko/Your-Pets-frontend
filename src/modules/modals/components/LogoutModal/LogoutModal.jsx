import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { Modal } from "@/shared/components/Modal/Modal";
import Button from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import { logoutThunk } from "@/redux/auth/authOperations";
import { selectAuthLoading } from "@/redux/auth/authSelectors";
import { ModalTitle, BtnContainer, Filling } from "./LogoutModal.styled";

export const LogoutModal = ({ onClose, onMenuClose, variant }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthLoading);

  const variantCheck = variant === "menu" || variant === "header";

  const handleYesClick = () => {
    document.body.style.overflow = "auto";
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        onClose();
        navigate("/");
        if (variantCheck) {
          onMenuClose();
        }
      })
      .catch((error) => toast.error(error));
  };

  const handleCancelClick = () => {
    document.body.style.overflow = "auto";
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Filling>
        {isLoading ? (
          <>
            <ModalTitle>Almost done. Wait for a moment...</ModalTitle>
            <Loader type="small" />
          </>
        ) : (
          <>
            <ModalTitle>Already leaving&#63;</ModalTitle>
            <BtnContainer>
              <Button
                onClick={handleCancelClick}
                text="Cancel"
                variant="cancel"
              />
              <Button
                onClick={handleYesClick}
                text="Yes"
                variant="logoutButton"
                icon="logout"
                iconPosition="right"
                iconVariant="transparent"
              />
            </BtnContainer>
          </>
        )}
      </Filling>
    </Modal>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func,
  variant: PropTypes.string,
};
