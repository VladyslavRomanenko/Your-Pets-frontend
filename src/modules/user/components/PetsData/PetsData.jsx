import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/authSelectors";
import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import {
  PetsList,
  PetsCardContainer,
  PetsCardText,
  PetsCardImg,
  PetsCardIcon,
} from "./PetsData.styled";
import Icon from "../../../../shared/icons/sprite.svg";
import { DeleteModal } from "../../../modals/components/DeleteModal/DeleteModal";
import { useEffect } from "react";

export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetName, setSelectedPetName] = useState("");
  const [selectedPetId, setSelectedPetId] = useState("");

  const user = useSelector(selectUser);
  const pets = user?.pets;

  const [page, setPage] = useState(1);
  const [currentPets, setCurrentPets] = useState([]);

  useEffect(() => {
    if (pets) {
      const startIndex = (page - 1) * 2;
      const endIndex = startIndex + 2;
      const petsSlice = pets.slice(startIndex, endIndex);
      setCurrentPets(petsSlice);
    }
  }, [page, pets]);

  const handleModalOpen = ({ id, name }) => {
    document.body.style.overflow = "hidden";
    setIsModalOpen((prev) => !prev);
    setSelectedPetName(name);
    setSelectedPetId(id);
  };

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
    document.body.style.overflow = "auto";
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <PetsList>
        {currentPets.map((el) => (
          <PetsCardContainer key={el._id}>
            <PetsCardImg src={el.file} alt="default" />
            <ul>
              <PetsCardText>
                <h3>Name: </h3>
                <p>{el.name}</p>
              </PetsCardText>
              <PetsCardText>
                <h3>Date of birth: </h3>
                <p>{el.date}</p>
              </PetsCardText>
              <PetsCardText>
                <h3>Type: </h3>
                <p>{el.type}</p>
              </PetsCardText>
              <PetsCardText>
                <h3> Comments: </h3>
                <p>{el.comments}</p>
              </PetsCardText>
            </ul>
            <button
              type="button"
              aria-label="Remove the card"
              onClick={() => handleModalOpen({ name: el.name, id: el._id })}
            >
              <PetsCardIcon width="24px" height="24px">
                <use href={Icon + "#trash-2"}></use>
              </PetsCardIcon>
            </button>
          </PetsCardContainer>
        ))}
      </PetsList>

      {isModalOpen && (
        <DeleteModal
          onClose={handleModalClose}
          type="own"
          title={selectedPetName}
          id={selectedPetId}
        />
      )}

      {pets?.length === 0 && <EmptyPetsList />}

      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={2}
        totalItems={pets?.length}
      />
    </>
  );
};
