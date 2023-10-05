import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CheckButton } from "../CheckButton/CheckButton";
import { FIlter } from "../Filter/Filter";
import { FilterButton } from "../FilterButton/FilterButton";
import { AttentionModal } from "../../../modals/components/AttentionModal/AttentionModal";

import { selectLoggedIn } from "@/redux/auth/authSelectors";

import {
  WrapperNoticesFilter,
  WrapperRightSide,
  WrapperRightFilterButton,
  AddPetLink,
} from "./NoticesFilters.styled";
import sprite from "../../../../shared/icons/sprite.svg";

export const NoticesFilters = () => {
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = useSelector(selectLoggedIn);

  const handleAttentionModal = () => {
    setIsAttentionModalOpen((prev) => !prev);
  };

  const addPetBtnClick = () => {
    if (!isLoggedIn) {
      setIsAttentionModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <WrapperNoticesFilter>
        <FilterButton />
        <WrapperRightSide>
          <CheckButton />
          <WrapperRightFilterButton>
            <FIlter />
            <AddPetLink
              to={isLoggedIn && "/add-pet"}
              state={{ from: location }}
              onClick={addPetBtnClick}
            >
              <span>Add Pet</span>
              <svg width={24} height={24}>
                <use href={sprite + "#plus-small"}></use>
              </svg>
            </AddPetLink>
          </WrapperRightFilterButton>
        </WrapperRightSide>
      </WrapperNoticesFilter>

      {isAttentionModalOpen && (
        <AttentionModal onClose={handleAttentionModal} />
      )}
    </>
  );
};
