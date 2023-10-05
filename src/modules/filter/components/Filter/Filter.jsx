import {
  CheckboxInput,
  CheckboxLabel,
  Filter2,
  FilterWrapper,
  Options,
  SvgCheck,
  TitleFilter,
  WrapperOpenOptions,
} from './Filter.styled';

import sprite from '@/shared/icons/sprite.svg';

import Button from '@/shared/components/Button/Button';

import { ageOptions, sexOptions } from '../../service/optionsService';

import { useDispatch, useSelector } from 'react-redux';
import {
  toggleAgeOption,
  toggleCheckboxByAge,
  toggleCheckboxByGender,
  toggleGenderOption,
} from '@/redux/global/globalSlice';
import { selectCheckboxes } from '@/redux/global/globalSelectors';
import { useEffect, useState } from 'react';
import { transformOption } from '../../helpers/transformOption';
import { toggleFilter } from '../../../../redux/global/globalSlice';
import { useRef } from 'react';

export const FIlter = () => {
  const [buttonText, setButtonText] = useState(window.innerWidth < 768 ? ' ' : 'Filter');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const checkboxes = useSelector(selectCheckboxes);
  const filterRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleDocumentClick = event => {
      if (isFilterOpen && filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    const handleResize = () => {
      setButtonText(window.innerWidth < 768 ? ' ' : 'Filter');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleButtonsFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleSelectByOption = optionType => {
    optionType === 'age' ? dispatch(toggleCheckboxByAge()) : dispatch(toggleCheckboxByGender());
  };

  const toggleCheckBoxOption = (optionType, option) => {
    dispatch(optionType === 'age' ? toggleAgeOption(option) : toggleGenderOption(option));

    dispatch(toggleFilter({ optionType, filterName: transformOption(option) }));
  };

  return (
    <FilterWrapper ref={filterRef}>
      <Button
        onClick={toggleButtonsFilter}
        text={buttonText}
        variant="filter"
        icon="filters-3"
        iconVariant="transparent"
        iconPosition="right"
        isButtonsVisible={isFilterOpen}
      />
      {isFilterOpen && (
        <Filter2>
          <TitleFilter>Filters</TitleFilter>
          <WrapperOpenOptions>
            <Button
              text="By age"
              variant="filterBySelect"
              icon={checkboxes.showCheckboxByAge ? 'chevron-up' : 'chevron-down'}
              iconVariant="transparent"
              iconPosition="left"
              onClick={() => toggleSelectByOption('age')}
            />
            {checkboxes.showCheckboxByAge && (
              <Options>
                {ageOptions.map(option => (
                  <CheckboxLabel key={option.value}>
                    <CheckboxInput
                      type="checkbox"
                      name="age"
                      value={option.value}
                      checked={checkboxes.ageOptions[option.value]}
                      onChange={() => toggleCheckBoxOption('age', option.value)}
                    />
                    {option.name}
                    {checkboxes.ageOptions[option.value] ? (
                      <SvgCheck width="24" height="24">
                        <use href={sprite + '#check-round'}></use>
                      </SvgCheck>
                    ) : (
                      <SvgCheck width="24" height="24">
                        <use href={sprite + '#round'}></use>
                      </SvgCheck>
                    )}
                  </CheckboxLabel>
                ))}
              </Options>
            )}
          </WrapperOpenOptions>
          <WrapperOpenOptions>
            <Button
              text="By Gender"
              variant="filterBySelect"
              icon={checkboxes.showCheckboxByGender ? 'chevron-up' : 'chevron-down'}
              iconVariant="transparent"
              iconPosition="left"
              onClick={() => toggleSelectByOption('sex')}
            />
            {checkboxes.showCheckboxByGender && (
              <Options>
                {sexOptions.map(option => (
                  <CheckboxLabel key={option.value}>
                    <CheckboxInput
                      type="checkbox"
                      name="sex"
                      value={option.value}
                      checked={checkboxes.sexOptions[option.value]}
                      onChange={() => toggleCheckBoxOption('sex', option.value)}
                    />
                    {option.name}
                    {checkboxes.sexOptions[option.value] ? (
                      <SvgCheck width="24" height="24">
                        <use href={sprite + '#check-round'}></use>
                      </SvgCheck>
                    ) : (
                      <SvgCheck width="24" height="24">
                        <use href={sprite + '#round'}></use>
                      </SvgCheck>
                    )}
                  </CheckboxLabel>
                ))}
              </Options>
            )}
          </WrapperOpenOptions>
        </Filter2>
      )}
    </FilterWrapper>
  );
};
