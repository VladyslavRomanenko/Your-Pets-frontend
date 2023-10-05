import PropTypes from "prop-types";
import { useState } from "react";
import sprite from "../../icons/sprite.svg";
import {
  SearchForm,
  SearchFormInput,
  SearchButton,
  ButtonIcon,
  DeleteButton,
  DeleteIcon,
} from "../Searchbar/Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue.trim());
  };

  const handleDelete = () => {
    setInputValue("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        value={inputValue}
        onChange={handleInput}
      />
      <SearchButton type="submit" aria-label="search button">
        <ButtonIcon>
          <use href={sprite + "#search"}></use>
        </ButtonIcon>
      </SearchButton>
      {inputValue.trim() !== "" && (
        <DeleteButton
          type="button"
          aria-label="delete button"
          onClick={handleDelete}
        >
          <DeleteIcon>
            <use href={sprite + "#cross-small"}></use>
          </DeleteIcon>
        </DeleteButton>
      )}
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
