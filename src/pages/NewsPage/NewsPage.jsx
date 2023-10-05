import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ListNews from "../../modules/news/components/ListNews/ListNews";
import { Searchbar } from "../../shared/components/Searchbar/Searchbar";
import { Container } from "../../shared/components/Container/Container";
import {
  fetchNewsBySearchThunk,
  fetchNewsThunk,
} from "../../redux/global/globalOperations";
import {
  selectNewsSort,
  selectorIsLoading,
} from "../../redux/global/globalSelectors";
import { Loader } from "../../shared/components/Loader/Loader";
import { Pagination } from "../../shared/components/Pagination/Pagination";
import { PageTitle } from "../../shared/components/PageTitle/PageTitle";

const NewsPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const newsSort = useSelector(selectNewsSort);

  useEffect(() => {
    dispatch(fetchNewsThunk({ page: page === 1 ? 1 : page, limit: 6 }))
      .unwrap()
      .catch((error) => toast.error(error));
  }, [dispatch, page]);

  const handleSubmit = (searchQuery) => {
    dispatch(fetchNewsBySearchThunk({ page: 1, limit: 6, searchQuery }))
      .unwrap()
      .then(() => setPage(1))
      .catch((error) => toast.error(error));
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <PageTitle title="News" />
      <Searchbar onSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <ListNews newsSort={newsSort?.data} />}
      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={6}
        totalItems={newsSort?.total}
        variant={isLoading ? "hidden" : "visible"}
      />
    </Container>
  );
};

export default NewsPage;
