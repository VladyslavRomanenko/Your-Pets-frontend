import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { transformAge, transformFilteredAge } from "../helpers/transformAge.js";
import { transformTitle } from "../helpers/transformTitle.js";

import Button from "@/shared/components/Button/Button";
import { ModalProductCart } from "../popups/ModalProductCart";
import { AttentionModal } from "../../modals/components/AttentionModal/AttentionModal.jsx";
import { DeleteModal } from "../../modals/components/DeleteModal/DeleteModal.jsx";

import { fetchNoticeByIdThunk } from "@/redux/notices/noticesOperations.js";
import { selectLoggedIn } from "@/redux/auth/authSelectors.js";
import { addOrDeleteFavoriteNoticeThunk } from "@/redux/notices/noticesOperations.js";
import { selectUser } from "@/redux/auth/authSelectors.js";
import { selectIsNoticesLoading } from "@/redux/notices/noticesSelectors.js";

import { PlugStyled } from "../../news/components/ListNews/ListNews.styled.js";
import {
  ProductList,
  ProductItem,
  PetCategory,
  FavoriteBtn,
  NoticesItemImg,
  ItemTitle,
  WrapperBtn,
  WrapperInformation,
  InformationMap,
  IconInformation,
  IconWrapper,
  ContentWrapper,
  WrapperLocation,
  DeleteBtn,
  IconPrimal,
  AddPetLink,
  LocationLink,
} from "./ProductCardList.styled";
import sprite from "@/shared/icons/sprite.svg";
import { selectSexFilters } from "@/redux/global/globalSelectors.js";
import { selectAgeFilters } from "@/redux/global/globalSelectors.js";
import { fetchFavoriteNoticesThunk } from "@/redux/notices/noticesOperations.js";
import { fetchUserDataThunk } from "../../../redux/auth/authOperations.js";

const ProductCardList = ({ notices, categoryType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [titleToDelete, setTitleToDelete] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsNoticesLoading);
  const sexFilters = useSelector(selectSexFilters);
  const ageFilters = useSelector(selectAgeFilters);

  const handleModalOpen = (id) => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    dispatch(fetchNoticeByIdThunk(id))
      .unwrap()
      .catch((error) => toast.error(error));
  };

  const handleAttentionModal = () => {
    setIsAttentionModalOpen((prev) => !prev);
  };

  const handleToggleFavorite = (id) => {
    if (isLoggedIn) {
      setSelectedId(id);
      dispatch(addOrDeleteFavoriteNoticeThunk(id))
        .unwrap()
        .then(() => {
          if (categoryType === "favorite") {
            dispatch(fetchFavoriteNoticesThunk({ page: 1, limit: 12 }));
          }
          if (
            categoryType === "sale" ||
            categoryType === "lost-found" ||
            categoryType === "in-good-hands"
          ) {
            dispatch(fetchUserDataThunk());
          } else {
            dispatch(fetchUserDataThunk());
          }
        })
        .catch((error) => toast.error(error));
    } else {
      setIsAttentionModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleDeleteModalOpen = ({ id, title }) => {
    setIsDeleteModalOpen((prev) => !prev);
    setSelectedId(id);
    setTitleToDelete(title);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen((prev) => !prev);
  };

  const addPetBtnClick = () => {
    if (!isLoggedIn) {
      setIsAttentionModalOpen(true);
    }
  };

  return (
    <>
      {notices?.length ? (
        <ProductList>
          {notices?.map(
            ({ category, age, _id, title, location, file, sex }) => (
              <ProductItem key={_id}>
                <IconWrapper>
                  <PetCategory>{category}</PetCategory>

                  <FavoriteBtn
                    onClick={() => handleToggleFavorite(_id)}
                    disabled={isLoading && selectedId === _id}
                  >
                    <IconPrimal
                      $variant={
                        isLoggedIn &&
                        user?.favorites.some((ad) => ad._id === _id)
                          ? "favorite"
                          : "default"
                      }
                    >
                      <use href={sprite + "#heart"}></use>
                    </IconPrimal>
                  </FavoriteBtn>

                  {categoryType === "own" && (
                    <DeleteBtn
                      onClick={() => handleDeleteModalOpen({ id: _id, title })}
                    >
                      <IconPrimal $variant="default">
                        <use href={sprite + "#trash-2"}></use>
                      </IconPrimal>
                    </DeleteBtn>
                  )}

                  <NoticesItemImg
                    loading="lazy"
                    src={file}
                    alt={title}
                    width={288}
                    height={288}
                  />

                  <WrapperInformation>
                    <InformationMap $type="location">
                      <LocationLink
                        href={`https://www.google.com/maps/place/${location}`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <IconInformation>
                          <use href={sprite + "#location-1"}></use>
                        </IconInformation>
                        <WrapperLocation>{location}</WrapperLocation>
                      </LocationLink>
                    </InformationMap>

                    <InformationMap
                      $filtered={
                        ageFilters?.includes(transformFilteredAge(age))
                          ? "yes"
                          : "no"
                      }
                    >
                      <IconInformation>
                        <use href={sprite + "#clock"}></use>
                      </IconInformation>
                      {transformAge(age)}
                    </InformationMap>

                    <InformationMap
                      $filtered={sexFilters?.includes(sex) ? "yes" : "no"}
                    >
                      <IconInformation>
                        <use
                          href={
                            sex === "female"
                              ? sprite + "#female"
                              : sprite + "#male"
                          }
                        ></use>
                      </IconInformation>
                      {sex}
                    </InformationMap>
                  </WrapperInformation>
                </IconWrapper>

                <ContentWrapper>
                  <ItemTitle>{transformTitle(title)}</ItemTitle>

                  <WrapperBtn>
                    <Button
                      type="button"
                      text="Learn more"
                      variant="bigButtonFirst"
                      onClick={() => handleModalOpen(_id)}
                    />
                  </WrapperBtn>
                </ContentWrapper>
              </ProductItem>
            )
          )}
        </ProductList>
      ) : (
        <PlugStyled>
          There are no notices matching your search query.
        </PlugStyled>
      )}

      <AddPetLink
        to={isLoggedIn && "/add-pet"}
        state={{ from: location }}
        onClick={addPetBtnClick}
      >
        <svg width={24} height={24}>
          <use href={sprite + "#plus"}></use>
        </svg>
        <span>Add Pet</span>
      </AddPetLink>

      {isModalOpen && (
        <ModalProductCart
          setIsModalOpen={setIsModalOpen}
          handleToggleFavorite={handleToggleFavorite}
        />
      )}

      {isAttentionModalOpen && (
        <AttentionModal onClose={handleAttentionModal} />
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          onClose={handleDelete}
          title={titleToDelete}
          id={selectedId}
        />
      )}
    </>
  );
};

ProductCardList.propTypes = {
  categoryType: PropTypes.string,
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      age: PropTypes.number,
      _id: PropTypes.string,
      title: PropTypes.string,
      location: PropTypes.string,
      file: PropTypes.string,
      sex: PropTypes.string,
    })
  ).isRequired,
};

export default ProductCardList;
