import PropTypes from "prop-types";
import OneNews from "../OneNews/OneNews";
import { ListNewsStyled, PlugStyled } from "./ListNews.styled";

const ListNews = ({ newsSort }) => {
  return (
    <>
      {newsSort.length === 0 ? (
        <PlugStyled>There are no news matching your search query.</PlugStyled>
      ) : (
        <ListNewsStyled>
          {newsSort.map((item) => {
            return <OneNews key={item.id} {...item} />;
          })}
        </ListNewsStyled>
      )}
    </>
  );
};

ListNews.propTypes = {
  newsSort: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ListNews;
