import { useState } from "react";
import icon from "../../../shared/icons/sprite.svg";
import { Button, Svg } from "./ButtonMenu.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const ButtonMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Button onClick={open} aria-label="Mobile menu open button">
        <Svg>
          <use href={icon + "#menu-hamburger"}></use>
        </Svg>
      </Button>
      <BurgerMenu onClick={close} isOpen={isOpen} />
    </>
  );
};
