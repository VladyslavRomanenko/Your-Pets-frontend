import PropTypes from "prop-types";
import { Modal } from "../../../../shared/components/Modal/Modal";
import { Filling, Title, TextStyled } from "./AttentionModal.styled";
import { AuthNav } from "../../../header/AuthNav/AuthNav";

export const AttentionModal = ({ onClose }) => {
  return (
    <Modal variant="bigPadding" onClose={onClose}>
      <Filling>
        <Title>Attention</Title>

        <TextStyled>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </TextStyled>

        <AuthNav variant="attentionModal" />
      </Filling>
    </Modal>
  );
};

AttentionModal.propTypes = {
  onClose: PropTypes.func,
};
