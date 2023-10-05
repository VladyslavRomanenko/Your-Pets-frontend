import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectChosenNotice } from "../../../redux/notices/noticesSelectors";
import { Modal } from "../../../shared/components/Modal/Modal";
import {
  CategoryName,
  CommentsText,
  CommentsTextStrong,
  ModalWrapper,
  NoticesInfoImg,
  NoticesInfoParameters,
  NoticesInfoTitle,
  PhotoDiv,
  ParametersList,
  ParametersValue,
  ParamsBox,
  TopWrapper,
  WrapperBtn,
  NavValue,
  ContactLink,
} from "./ModalProductCart.styled";
import Button from "../../../shared/components/Button/Button";
import { selectLoggedIn, selectUser } from "../../../redux/auth/authSelectors";

export const ModalProductCart = ({ setIsModalOpen, handleToggleFavorite }) => {
  const notice = useSelector(selectChosenNotice);
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Modal onClose={() => setIsModalOpen(false)} variant="petsModal">
      <ModalWrapper key={notice?._id}>
        <TopWrapper>
          <PhotoDiv>
            <CategoryName>{notice?.category}</CategoryName>
            <NoticesInfoImg src={notice?.file} alt={notice?.title} />
          </PhotoDiv>

          <ParamsBox>
            <NoticesInfoTitle>{notice?.title}</NoticesInfoTitle>

            <ParametersList>
              <NoticesInfoParameters>
                Name:
                <ParametersValue>{notice?.name}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Birthday:
                <ParametersValue>{notice?.date}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Type:
                <ParametersValue> {notice?.type}</ParametersValue>
              </NoticesInfoParameters>
              {notice?.category === "sell" && (
                <NoticesInfoParameters>
                  Price:
                  <ParametersValue> {notice?.price}</ParametersValue>
                </NoticesInfoParameters>
              )}
              <NoticesInfoParameters>
                Place:
                <NavValue
                  href={`https://www.google.com/maps/place/${notice?.location}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {notice?.location}
                </NavValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                The sex:
                <ParametersValue>{notice?.sex}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Email:
                <NavValue href={`mailto:${notice?.email}`} $variant="yellow">
                  {notice?.email}
                </NavValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Phone:
                <NavValue href={`tel:${notice?.phone}`} $variant="yellow">
                  {notice?.phone}
                </NavValue>
              </NoticesInfoParameters>
            </ParametersList>
          </ParamsBox>
        </TopWrapper>

        <CommentsText>
          <CommentsTextStrong>Comments: </CommentsTextStrong>
          {notice?.comments}
        </CommentsText>

        <WrapperBtn>
          <Button
            text={
              isLoggedIn && user?.favorites.some((ad) => ad._id === notice?._id)
                ? "Remove"
                : "Add to"
            }
            variant="logoutButton"
            iconVariant={
              isLoggedIn && user?.favorites.some((ad) => ad._id === notice?._id)
                ? "favorite"
                : "transparent"
            }
            iconPosition="right"
            icon="heart"
            onClick={() => handleToggleFavorite(notice?._id)}
          />
          <ContactLink href={`tel:${notice?.phone}`}>Contact</ContactLink>
        </WrapperBtn>
      </ModalWrapper>
    </Modal>
  );
};

ModalProductCart.propTypes = {
  handleToggleFavorite: PropTypes.func,
  setIsModalOpen: PropTypes.func,
};
