import PropTypes from "prop-types";
import {
  Card,
  BeforeDiv,
  Article,
  Img,
  BlockInfo,
  Title,
  Paragraph,
  DivStyled,
  Date,
  ReadMore,
} from "./OneNews.styled";
import formatDate from "../../helpers/formatDate";

const OneNews = ({ imgUrl, title, text, date, url }) => {
  return (
    <Card>
      <BeforeDiv></BeforeDiv>
      <Article>
        <Img src={imgUrl} alt={title} width={395} height={252} />

        <BlockInfo>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>

          <DivStyled>
            <Date>{formatDate(date)}</Date>
            <ReadMore
              href={url}
              target="_blanck"
              rel="noopener noreferrer nofollow"
            >
              Read more
            </ReadMore>
          </DivStyled>
        </BlockInfo>
      </Article>
    </Card>
  );
};

OneNews.propTypes = {
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default OneNews;
