import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Backdrop, ModalStyled, ButtonCloseModal } from "./Modal.styled";
import { useEffect } from "react";
import sprite from "../../icons/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose, variant }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    onClose();
    document.body.style.overflow = "auto";
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalStyled $variant={variant}>
        <ButtonCloseModal
          $variant={variant}
          aria-label="close modal"
          onClick={handleCloseModal}
        >
          <svg width={24} height={24}>
            <use href={sprite + "#cross-small"}></use>
          </svg>
        </ButtonCloseModal>
        {children}
      </ModalStyled>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
