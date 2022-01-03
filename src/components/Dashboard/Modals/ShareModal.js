import React from 'react';
import { Modal } from 'react-bootstrap';
import copyIcon from '../../../icon/copy-icon.png'
import './ShareModal.css'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='share-modal-box'>
                <h2>Share Game</h2>
                <p>Share this link with your friends. They will be able to play the game you created!</p>
                <form className='d-flex align-items-center'>
                    <input readOnly defaultValue="www.playmygame.com/xyv879" className='form-control shadow-none py-0 outline-none' type="text" />
                    <button className='btn shadow-none' type='submit'><img src={copyIcon} alt="" /></button>
                </form>
            </Modal.Body>
        </Modal>
    );
}
const ShareModal = ({ modalShow, setModalShow }) => {


    return (
        <>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ShareModal;