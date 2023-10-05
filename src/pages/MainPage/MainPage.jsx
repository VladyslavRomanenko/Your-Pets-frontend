import { StyledPicture, StyledTittle, Wrapper } from "./MainPage.styled";
import mainImgMobileWebp from "../../shared/assets/images/mainPage/main_mob@1x.webp";
import mainImgMobileRetinaWebp from "../../shared/assets/images/mainPage/main_mob@2x.webp";
import mainImgTabWebp from "../../shared/assets/images/mainPage/main_tab@1x.webp";
import mainImgTabWebpRetina from "../../shared/assets/images/mainPage/main_tab@2x.webp";
import mainImgDescWebp from "../../shared/assets/images/mainPage/main_desc@1x.webp";
import mainImgDescWebpRetina from "../../shared/assets/images/mainPage/main_desc@2x.webp";
import { BackgroundImgWrapper } from "../../shared/styles/styled components/BackgroundImgWrapper.styled";

const MainPage = () => {
  return (
    <BackgroundImgWrapper $variant="main">
      <Wrapper>
        <StyledTittle>Take good care of your small pets</StyledTittle>

        <StyledPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${mainImgDescWebp} 1x, ${mainImgDescWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${mainImgTabWebp} 1x, ${mainImgTabWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${mainImgMobileWebp} 1x, ${mainImgMobileRetinaWebp} 2x`}
            type="image/webp"
          />

          <img
            src={mainImgDescWebpRetina}
            alt="Pets"
            width={917}
            height={670}
          />
        </StyledPicture>
      </Wrapper>
    </BackgroundImgWrapper>
  );
};

export default MainPage;
