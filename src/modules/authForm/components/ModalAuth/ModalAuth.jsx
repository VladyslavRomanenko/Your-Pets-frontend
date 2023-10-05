import Button from "@/shared/components/Button/Button";
import { Modal } from "@/shared/components/Modal/Modal";
import { useDispatch } from "react-redux";

import { Title } from "../Title/Title";

import { setIsSuccess } from "@/redux/global/globalSlice";

import { Text, WrapperModalAuth } from "./ModalAuth.styled";

export const ModalAuth = () => {
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setIsSuccess(false));
  };

  return (
    <Modal variant="bigPadding" onClose={onCloseModal}>
      <WrapperModalAuth>
        <Title text="Congrats!" />
        <Text>Your registration completed successfully</Text>
        <Button
          text="Go to Profile"
          icon="pawprint"
          variant="bigButtonSecond"
          iconPosition="right"
          onClick={onCloseModal}
        />
      </WrapperModalAuth>
    </Modal>
  );
};
