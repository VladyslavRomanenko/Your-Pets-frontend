import pets from "../../images/pets.png";
import petsW1x from "../../images/pets@1x.webp";
import petsW2x from "../../images/pets@2x.webp";
import petsPng1x from "../../images/petsp@1x.png";
import petsPng2x from "../../images/petsp@2x.png";
import { EmptyPetsImg, EmptyPetsText } from "./EmptyPetsList.styled";

export const EmptyPetsList = () => {
  return (
    <>
      <EmptyPetsImg>
        <source srcSet={`${petsW1x} 1x, ${petsW2x} 2x`} type="image/webp" />
        <source srcSet={`${petsPng1x} 1x, ${petsPng2x} 2x`} type="image/png" />
        <img src={pets} alt="Empty pets list" />
      </EmptyPetsImg>
      <EmptyPetsText>
        You have not added your pets, if you want to add them, click on the
        button &#34;Add pet&#34;
      </EmptyPetsText>
    </>
  );
};
