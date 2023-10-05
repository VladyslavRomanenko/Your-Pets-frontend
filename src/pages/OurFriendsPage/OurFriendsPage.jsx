import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriendsThunk } from "../../redux/global/globalOperations";

import { OurFriendsList } from "../../modules/ourFriends/OurFriendsList/OurFriendsList";
import { Container } from "../../shared/components/Container/Container";
import { PageTitle } from "../../shared/components/PageTitle/PageTitle";
import { selectorIsLoading } from "../../redux/global/globalSelectors";
import { Loader } from "../../shared/components/Loader/Loader";
import { toast } from "react-toastify";

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);

  useEffect(() => {
    dispatch(
      fetchFriendsThunk({
        page: 1,
        limit: 10,
      })
    )
      .unwrap()
      .catch((error) => toast.error(error));
  }, [dispatch]);

  return (
    <Container>
      <PageTitle title="Our Friends" />
      {isLoading ? <Loader /> : <OurFriendsList />}
    </Container>
  );
};

export default OurFriendsPage;
