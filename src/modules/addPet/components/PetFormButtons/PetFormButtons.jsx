import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/shared/components/Button/Button";
import { selectStep } from "@/redux/notices/noticesSelectors";
import { updateStep } from "@/redux/notices/noticesSlice";
import { selectIsNoticesLoading } from "@/redux/notices/noticesSelectors";
import {
  addPetFormData,
  petFormDataInitialState,
} from "@/redux/notices/noticesSlice";

import {
  BtnWrapper,
  CancelBackIcon,
  CancelBackLink,
  LinkText,
} from "./PetFormButtons.styled";
import sprite from "@/shared/icons/sprite.svg";
import { selectBackLocation } from "@/redux/global/globalSelectors";

export const PetFormButtons = ({ backLinkLocation, linkText, btnText }) => {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  const isLoading = useSelector(selectIsNoticesLoading);
  const backLink = useSelector(selectBackLocation);

  const handleCancelBackLink = () => {
    if (step > 1) {
      dispatch(updateStep(step - 1));
    }

    if (linkText === "Cancel") {
      dispatch(addPetFormData(petFormDataInitialState));
    }
  };

  return (
    <BtnWrapper>
      <Button
        text={isLoading ? "Loading" : `${btnText}`}
        type="submit"
        icon="pawprint"
        iconPosition="right"
        variant="bigButtonSecond"
        disabled={isLoading}
      />
      <CancelBackLink
        to={backLinkLocation === backLink ? backLink : backLinkLocation}
        onClick={handleCancelBackLink}
        $disabled={isLoading ? "yes" : "no"}
      >
        <CancelBackIcon width={24} height={24}>
          <use href={sprite + "#arrow-left"}></use>
        </CancelBackIcon>
        <LinkText>{linkText}</LinkText>
      </CancelBackLink>
    </BtnWrapper>
  );
};

PetFormButtons.propTypes = {
  backLinkLocation: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
