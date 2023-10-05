import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Modal } from "@/shared/components/Modal/Modal";
import Button from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import {
  deleteOwnNoticeThunk,
  deletePetThunk,
} from "@/redux/notices/noticesOperations";
import { selectIsNoticesLoading } from "@/redux/notices/noticesSelectors";
import { fetchOwnNoticesThunk } from "@/redux/notices/noticesOperations";
import {
  selectAgeFilters,
  selectSexFilters,
} from "@/redux/global/globalSelectors";

import {
  Filling,
  BlockText,
  Title,
  TextStyled,
  BoldText,
  BlockButton,
} from "./DeleteModal.styled";

export const DeleteModal = ({ onClose, title, type, id }) => {
  const dispatch = useDispatch();

  const ageFilters = useSelector(selectAgeFilters);
  const sexFilters = useSelector(selectSexFilters);

  const isLoading = useSelector(selectIsNoticesLoading);

  const handleDelete = () => {
    document.body.style.overflow = "auto";
    if (type === "own") {
      dispatch(deletePetThunk(id))
        .unwrap()
        .then(() => {
          onClose();
          toast.success("Deleting completed successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(deleteOwnNoticeThunk(id))
        .unwrap()
        .then(() => {
          onClose();
          dispatch(
            fetchOwnNoticesThunk({
              page: 1,
              limit: 12,
              age: ageFilters,
              sex: sexFilters,
            })
          );
          toast.success("Deleting completed successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Filling>
        {isLoading ? (
          <>
            <Title>Almost done. Wait for a moment...</Title>
            <Loader type="small" />
          </>
        ) : (
          <>
            <Title>
              Delete {type === "own" ? "your pet" : "advertisement"}&#63;
            </Title>
            <BlockText>
              <TextStyled>
                Are you sure you want to delete
                <BoldText> “{title}”&#63; </BoldText>
              </TextStyled>
              <TextStyled>You can`t undo this action.</TextStyled>
            </BlockText>

            <BlockButton>
              <Button onClick={handleClose} text="Cancel" variant="cancel" />
              <Button
                text="Yes"
                variant="logoutButton"
                icon="trash-2"
                iconPosition="right"
                iconVariant="transparent"
                onClick={handleDelete}
              />
            </BlockButton>
          </>
        )}
      </Filling>
    </Modal>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
