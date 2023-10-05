import PropTypes from "prop-types";
import { useState } from "react";
import { LogoutBtn } from "./Logout.styled.js";
import { LogoutModal } from "../../../modules/modals/components/LogoutModal/LogoutModal.jsx";
import Icons from "../../icons/sprite.svg";

export const Logout = ({ variant = "", type, onMenuClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    document.body.style.overflow = "auto";
    setIsModalOpen(false);
  };

  return (
    <>
      <LogoutBtn onClick={handleModalOpen} $variant={variant} $type={type}>
        Log Out
        <svg>
          <use href={Icons + "#logout"}> </use>
        </svg>
      </LogoutBtn>
      {isModalOpen && (
        <LogoutModal
          onClose={handleModalClose}
          onMenuClose={onMenuClose}
          variant={variant}
        />
      )}
    </>
  );
};

Logout.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  onMenuClose: PropTypes.func,
};
