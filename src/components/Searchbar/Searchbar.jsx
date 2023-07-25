import React from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SerchFromInput,
} from './Searchbar.styled';
export class Searchbar extends React.Component {
  state = {
    searchImg: '',
  };
  handSetState = (e) => {
    this.setState({searchImg:e.target.value})
  }
  SubmitSearch = (e) => {
    e.preventDefault()
    const {searchImg} = this.state
   this.props.onSubmit(searchImg.trim())
  }
  render() {
    return (
      <SearchBarHeader className="searchbar">
        <SearchForm onSubmit={this.SubmitSearch} className="form">
          <SearchFormButton type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormButton>

          <SerchFromInput
            className="input"
            type="text"
            placeholder="Search images and photos"
            onChange={this.handSetState}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
