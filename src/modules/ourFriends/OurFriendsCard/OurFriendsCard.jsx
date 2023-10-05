import PropTypes from "prop-types";
import { useState } from "react";
import {
  StyledAddress,
  StyledCardWrapper,
  StyledH3,
  StyledImg,
  StyledImgLink,
  StyledList,
  StyledListItem,
  StyledP,
  StyledText,
  StyledTitleLink,
  StyledTittle,
  Wrapper,
} from "./OurFriendsCard.styled";
import { WorkDays } from "../WorkDays/WorkDays";

export const OurFriendsCard = ({
  title,
  imageUrl,
  addressUrl,
  address,
  email,
  phone,
  workDays,
  url,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleBtnClick = () => {
    setIsListOpen((prev) => !prev);
  };

  const openDay = workDays?.filter((day) => day.isOpen);

  return (
    <Wrapper>
      <StyledTittle>
        <StyledTitleLink
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {title}
        </StyledTitleLink>
      </StyledTittle>
      <StyledCardWrapper>
        <StyledImgLink
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <StyledImg src={imageUrl} alt={title} />
        </StyledImgLink>

        <StyledAddress>
          <StyledList>
            <StyledListItem>
              <button onClick={handleBtnClick}>
                <StyledH3>Time:</StyledH3>
                {workDays?.length ? (
                  <WorkDays days={openDay} isActive={isListOpen} />
                ) : (
                  <StyledP>day and night</StyledP>
                )}
              </button>
            </StyledListItem>
            <StyledListItem>
              <StyledH3>Address:</StyledH3>
              {addressUrl ? (
                <StyledText
                  href={addressUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {address}
                </StyledText>
              ) : (
                <StyledP>website only</StyledP>
              )}
            </StyledListItem>
            <StyledListItem>
              <StyledH3>Email:</StyledH3>
              {email ? (
                <StyledText href={`mailto:${email}`}>{email}</StyledText>
              ) : (
                <StyledP>website only</StyledP>
              )}
            </StyledListItem>
            <StyledListItem>
              <StyledH3>Phone:</StyledH3>
              {phone ? (
                <StyledText href={`tel:${phone}`}>{phone}</StyledText>
              ) : (
                <StyledP>website only</StyledP>
              )}
            </StyledListItem>
          </StyledList>
        </StyledAddress>
      </StyledCardWrapper>
    </Wrapper>
  );
};

OurFriendsCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  addressUrl: PropTypes.string,
  address: PropTypes.string,
  url: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  workDays: PropTypes.array,
};
