import { StyledTitle } from "./Title.styled";
import { useSelector } from "react-redux";
import {
  selectPetFormData,
  selectStep,
} from "@/redux/notices/noticesSelectors";

const Title = () => {
  const petFormData = useSelector(selectPetFormData);
  const step = useSelector(selectStep);

  const category = petFormData?.category;
  const isStep3 = step === 3;

  const getTitle = (category) => {
    switch (category) {
      case "own":
        return "Add Your Pet";

      case "sell":
        return "Add Pet For Sell";

      case "lost-found":
        return "Lost/Found Pet";

      case "in-good-hands":
        return "In Good Hands";

      default:
        return "Add Pet";
    }
  };

  return (
    <StyledTitle
      className={isStep3 && petFormData?.category !== "own" ? "centered" : ""}
    >
      {getTitle(category)}
    </StyledTitle>
  );
};

export default Title;
