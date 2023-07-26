import React from 'react';
import { fetchImgj } from './FetchImg';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { useState } from 'react';
import { useEffect } from 'react';
export const App = () => {
  // state = {
  //   searchImg: '',
  //   imgApiMass: [],
  //   page: 1,
  //   isloader: false,
  // };
  const [searchImg, setSearchImg] = useState('');
  const [imgApiMass, setImgApiMass] = useState([]);
  const [page, setPage] = useState(1);
  const [isloader, setIsloader] = useState(false);

  useEffect(() => {
    const fetchGeneratorOne = async () => {
      const articles = await fetchImgj(searchImg);
      return articles;
    };
    try {
      if (searchImg) {
        fetchGeneratorOne().then(articles => {
          setImgApiMass(articles.data.hits);
        });
      }
    } catch {
      console.log('error');
    } finally {
    }
  }, [searchImg]);
  useEffect(() => {
    const fetchGeneratorTwo = async () => {
      const articles = await fetchImgj(searchImg, page);
      return articles;
    };
    try {
      debugger
      if(page !== 1 && imgApiMass.length/12 === page-1){
        fetchGeneratorTwo().then(articles => {
          setImgApiMass(() => [imgApiMass, ...articles.data.hits]);
        });
      }

    } catch {
    } finally {
    }
  }, [page, imgApiMass,searchImg]);

  // async componentDidUpdate(prevProps, prevState) {
  //   try {
  //     if (this.state.searchImg !== prevState.searchImg) {
  //       this.setState({ isloader: true });
  //       const articles = await fetchImgj(this.state.searchImg);
  //       this.setState({ imgApiMass: articles.data.hits });
  //     }
  //     if (this.state.page !== prevState.page) {
  //       this.setState({ isloader: true });
  //       const articles = await fetchImgj(this.state.searchImg, this.state.page);
  //       this.setState({
  //         imgApiMass: [...this.state.imgApiMass, ...articles.data.hits],
  //       });
  //     }
  //   } catch {
  //   } finally {
  //     if (this.state.isloader) {
  //       this.setState({ isloader: false });
  //     }
  //   }
  // }

  const SubmitSearch = e => {
    setSearchImg(e);
  };

  const lodaMoreImg = e => {
    e.preventDefault();
    // const { page } = this.state;
    setPage(page + 1);
  };

  // const { imgApiMass, isloader,page } = this.state;
  return (
    <>
      {/* SEARCH-BAR */}
      <Searchbar submitSearch={SubmitSearch}></Searchbar>
      {/* SEARCH-BAR */}
      {/* ImageGallery */}
      <ImageGallery imgApiMass={imgApiMass}></ImageGallery>
      {/* ImageGallery */}
      {/* LOADMore */}
      <Loader isloader={isloader}></Loader>
      {12 * page === imgApiMass.length ? (
        <ButtonLoadMore loadMore={lodaMoreImg}></ButtonLoadMore>
      ) : null}
      {/* LOADMore */}
      {/* MODAL */}
      {/* MODAL */}
    </>
  );
};
