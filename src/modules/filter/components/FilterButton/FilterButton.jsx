import { useSelector } from "react-redux";
import {
  NavLinkStyled,
  NavListItemStyled,
  NavListStyled,
} from "./FilterButton.styled";
import { selectLoggedIn } from "@/redux/auth/authSelectors";
import { allCategories, publicCategories } from "../../data/categories";

export const FilterButton = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <NavListStyled>
          {allCategories.map(({ label, path }) => (
            <NavListItemStyled key={label}>
              <NavLinkStyled to={`/notices/${path}`}>{label}</NavLinkStyled>
            </NavListItemStyled>
          ))}
        </NavListStyled>
      ) : (
        <NavListStyled>
          {publicCategories.map(({ label, path }) => (
            <NavListItemStyled key={label}>
              <NavLinkStyled to={`/notices/${path}`}>{label}</NavLinkStyled>
            </NavListItemStyled>
          ))}
        </NavListStyled>
      )}
    </>
  );
};
