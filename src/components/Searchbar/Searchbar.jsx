import React from 'react';
import { useState } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SerchFromInput,
} from './Searchbar.styled';
export const Searchbar = ({submitSearch}) => {
  // state = {
  //   searchImg: '',
  // };
  const [searchImg,setSearchImg] = useState('')
  const handSetState = (e) => {
    setSearchImg(e.target.value)
  }
  const handSubmitSearch = (e) => {
    e.preventDefault()
    submitSearch(searchImg.trim())
  // this.props.onSubmit(searchImg.trim())
  }
    return (
      <SearchBarHeader className="searchbar">
        <SearchForm onSubmit={handSubmitSearch} className="form">
          <SearchFormButton type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormButton>

          <SerchFromInput
            className="input"
            type="text"
            placeholder="Search images and photos"
            onChange={handSetState}
          />
        </SearchForm>
      </SearchBarHeader>
    );
}
