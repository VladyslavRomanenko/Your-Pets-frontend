import { transformString } from "../../helpers/transformString";
import { WrapperCheckButton } from "./CheckButton.styled";
import { ageOptions, sexOptions } from "../../service/optionsService";
import Button from "@/shared/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCheckboxes } from "@/redux/global/globalSelectors";
import {
  setSelectCheckboxName,
  toggleAgeOption,
  toggleGenderOption,
} from "@/redux/global/globalSlice";
import { toggleFilter } from "@/redux/global/globalSlice";
import { transformOption } from "../../helpers/transformOption";

export const CheckButton = () => {
  const checkboxes = useSelector(selectCheckboxes);
  const dispatch = useDispatch();

  const toggleCheckBoxOption = (optionType, option) => {
    dispatch(
      optionType === "age"
        ? toggleAgeOption(option)
        : toggleGenderOption(option)
    );

    dispatch(toggleFilter({ optionType, filterName: transformOption(option) }));
  };

  return (
    <WrapperCheckButton>
      {ageOptions.map((option) => (
        <div key={option.value}>
          {checkboxes.ageOptions[option.value] && (
            <Button
              text={transformString(option.value)}
              variant="filterCheck"
              icon="cross-small"
              iconVariant="filterbutton"
              iconOnClick={() => toggleCheckBoxOption("age", option.value)}
              iconPosition="right"
            />
          )}
        </div>
      ))}
      {sexOptions.map((option) => (
        <div key={option.value}>
          {checkboxes.sexOptions[option.value] && (
            <Button
              text={transformString(option.value)}
              variant="filterCheck"
              icon="cross-small"
              iconVariant="filterbutton"
              iconOnClick={() => toggleCheckBoxOption("sex", option.value)}
              iconPosition="right"
            />
          )}
        </div>
      ))}
    </WrapperCheckButton>
  );
};
