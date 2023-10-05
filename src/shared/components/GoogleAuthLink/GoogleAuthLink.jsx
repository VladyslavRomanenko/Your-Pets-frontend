import sprite from "../../../shared/icons/sprite.svg";
import {
  GoogleLink,
  GoogleTextFirst,
  GoogleTextSecond,
} from "./GoogleAuthLink.styled";

export const GoogleAuthLink = () => {
  return (
    <GoogleLink to={"https://petgrammers-backend.onrender.com/api/auth/google"}>
      <GoogleTextFirst>Continue with</GoogleTextFirst>
      <svg width={24} height={24}>
        <use href={sprite + "#google"}></use>
      </svg>
      <GoogleTextSecond>oogle</GoogleTextSecond>
    </GoogleLink>
  );
};
