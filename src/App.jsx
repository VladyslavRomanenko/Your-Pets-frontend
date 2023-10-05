import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { selectRefresh } from "./redux/auth/authSelectors";
import { refreshThunk } from "./redux/auth/authOperations";
import { Loader } from "./shared/components/Loader/Loader";
import ChooseOption from "./modules/addPet/components/ChooseOption/ChooseOption";
import PersonalDetails from "./modules/addPet/components/PersonalDetails/PersonalDetails";
import MoreInfo from "./modules/addPet/components/MoreInfo/MoreInfo";
import { PublicRoute } from "./shared/routes/PublicRoute";
import { ProtectedRoute } from "./shared/routes/ProtectedRoute";
import GoogleAuth from "./pages/GoogleAuth/GoogleAuth";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));
const OurFriendsPage = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route
              path="register"
              element={
                <PublicRoute
                  component={<RegisterPage />}
                  restricted
                  redirectTo="/"
                />
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  component={<LoginPage />}
                  restricted
                  redirectTo="/"
                />
              }
            />
            <Route path="notices/:category" element={<NoticesPage />} />
            <Route
              path="user"
              element={
                <ProtectedRoute component={<UserPage />} redirectTo="/login" />
              }
            />
            <Route
              path="add-pet"
              element={
                <ProtectedRoute
                  component={<AddPetPage />}
                  redirectTo="/login"
                />
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute
                    component={<ChooseOption />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="details"
                element={
                  <ProtectedRoute
                    component={<PersonalDetails />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="more-info"
                element={
                  <ProtectedRoute
                    component={<MoreInfo />}
                    redirectTo="/login"
                  />
                }
              />
            </Route>
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="googleAuth" element={<GoogleAuth />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
