import React from 'react';
import { fetchImgj } from './FetchImg';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends React.Component {
  state = {
    searchImg: '',
    imgApiMass: [],
    page: 1,
    isloader: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    try {
      if (this.state.searchImg !== prevState.searchImg) {
        this.setState({ isloader: true });
        const articles = await fetchImgj(this.state.searchImg);
        this.setState({ imgApiMass: articles.data.hits });
      }
      if (this.state.page !== prevState.page) {
        this.setState({ isloader: true });
        const articles = await fetchImgj(this.state.searchImg, this.state.page);
        this.setState({
          imgApiMass: [...this.state.imgApiMass, ...articles.data.hits],
        });
      }
    } catch {
    } finally {
      if (this.state.isloader) {
        this.setState({ isloader: false });
      }
    }
  }

  SubmitSearch = e => {
    console.log(e)
    this.setState({ searchImg: e});
  };

  lodaMoreImg = e => {
    e.preventDefault();
    const { page } = this.state;
   this.setState({ page: page + 1 });
  };

  render() {
    const { imgApiMass, isloader,page } = this.state;
    return (
      <>
        {/* SEARCH-BAR */}
        <Searchbar onSubmit={this.SubmitSearch}></Searchbar>
        {/* SEARCH-BAR */}
        {/* ImageGallery */}
        <ImageGallery imgApiMass={imgApiMass}></ImageGallery>
        {/* ImageGallery */}
        {/* LOADMore */} 
        <Loader isloader={isloader}></Loader>
        {(12*page) === imgApiMass.length ? <ButtonLoadMore loadMore={this.lodaMoreImg}></ButtonLoadMore>: null}
        {/* LOADMore */}
        {/* MODAL */}
        {/* MODAL */}
      </>
    );
  }
}
