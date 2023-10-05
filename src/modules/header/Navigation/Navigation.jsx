import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { selectLoggedIn } from "../../../redux/auth/authSelectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      <Nav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </>
  );
};
