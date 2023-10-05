import { ProgressText, ProgressWrapper } from "./ProgressBar.styled";
import { useSelector } from "react-redux";
import { selectStep } from "@/redux/notices/noticesSelectors";

const ProgressBar = () => {
  const step = useSelector(selectStep);

  const getColor = (index) => {
    if (step === 1) {
      return index === 0 ? "blue" : "grey";
    } else if (step === 2) {
      return index === 0 ? "green" : index === 1 ? "blue" : "grey";
    } else if (step === 3) {
      return index === 0 || index === 1 ? "green" : "blue";
    }
  };

  return (
    <ProgressWrapper>
      <ProgressText color={getColor(0)}>Choose option</ProgressText>
      <ProgressText color={getColor(1)}>Personal details</ProgressText>
      <ProgressText color={getColor(2)}>More info</ProgressText>
    </ProgressWrapper>
  );
};

export default ProgressBar;
