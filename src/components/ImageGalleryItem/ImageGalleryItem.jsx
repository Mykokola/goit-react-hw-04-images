import React from 'react';
import PropTypes from 'prop-types'
import { Modal } from 'components/Modal/Modal';
import { GalleryItem,GalleryItemImg } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends React.Component {
  state = {
    modalShow: '',
  };

  // swithcerModal = () => {
  //   const {modalShow} = this.state
  //   modalShow
  // }
  showModal = e => {
    e.preventDefault();
    const { imgApiMass } = this.props;
    const smallImg = e.target.src;
    imgApiMass.forEach(e => {
      if (smallImg === e.webformatURL) {
        this.setState({ modalShow: e.largeImageURL });
      }
    });
    window.addEventListener('keydown', this.handleKeyDown);
  };
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.modalClose() // Закрываем модальное окно при нажатии клавиши Escape
    }
  };
  modalClose = () => {
    window.removeEventListener('keydown', this.handleKeyDown);

    this.setState({modalShow:''})
  }
  render() {
    const { image } = this.props;
    const { modalShow } = this.state;
    return (
      <>
        <GalleryItem onClick={this.showModal} key={image.id} className="gallery-item">
          <GalleryItemImg src={image.webformatURL} alt="" />
        </GalleryItem>
        <Modal modalClose={this.modalClose} modalShow={modalShow}></Modal>
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        id:PropTypes.number.isRequired,
        webformatURL:PropTypes.string.isRequired
    }),
    imgApiMass: PropTypes.array.isRequired
}