import PropTypes from 'prop-types'
import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ imgApiMass }) => {
  return (
    <>
      <GalleryList className="gallery">
        {imgApiMass.length
          ? imgApiMass.map(image => (
              <ImageGalleryItem
                imgApiMass={imgApiMass}
                key={image.id}
                image={image}
              ></ImageGalleryItem>
            ))
          : null}
      </GalleryList>
    </>
  );
};
ImageGallery.propTypes = {
    imgApiMass: PropTypes.array.isRequired
}