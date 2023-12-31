import React from 'react';
import { fetchImgj } from './FetchImg';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { useState } from 'react';
import { useEffect } from 'react';
export const App = () => {
  const [searchImg, setSearchImg] = useState('');
  const [imgApiMass, setImgApiMass] = useState([]);
  const [page, setPage] = useState(1);
  const [isloader, setIsloader] = useState(false);

  const SubmitSearch = e => {
    setPage(1);
    setSearchImg(e);
  };

  const lodaMoreImg = e => {
    e.preventDefault();
    setPage(page + 1);
  };
  const fetchGenerator = async () => {
    const articles = await fetchImgj(searchImg, page);
    return articles;
  };

  useEffect(() => {
    try {
      if (searchImg.length) {
        setIsloader(true);
        fetchGenerator().then(articles => {
          setImgApiMass(() => [...articles.data.hits]);
        });
     
      }
    } catch {
      console.log('error');
    } finally {
      setIsloader(false);
    }
    // eslint-disable-next-line
  }, [searchImg]);

  useEffect(() => {
    try {
      if (page !== 1) {
      
        setIsloader(true);
        fetchGenerator().then(articles => {
          setImgApiMass(() => [...imgApiMass, ...articles.data.hits]);
        });
      }
    } catch {
    } finally {
      setIsloader(false);
    }
    // eslint-disable-next-line
  }, [page]);

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
