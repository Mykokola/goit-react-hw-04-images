import PropTypes from 'prop-types'
import { ModalWindow,Overlay } from './Modal.styled';
export const Modal = ({modalShow,modalClose}) => {
  return (
    <>
      {modalShow ? (
        <Overlay onClick={modalClose} className="overlay">
          <ModalWindow className="modal">
            <img src={modalShow} alt="" />
          </ModalWindow>
        </Overlay>
      ) : null}
    </>
  );}
Modal.propTypes = {
    modalShow:PropTypes.string.isRequired
}