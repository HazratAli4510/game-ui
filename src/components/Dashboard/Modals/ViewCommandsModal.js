import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ViewCommandsModal.css'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='share-modal-box'>
                <h2>Commands</h2>
                <div className="commandBox">
                    <ul>
                        <li>add this image of a rocket ship https://upload.wikimedia.org/wikipedia/commons/d/de/Red_left-facing_rocket_ship.svg</li>
                        <li>
                            make it smaller
                        </li>
                        <li>rotate it by 135 degrees</li>
                    </ul>
                </div>
                <div className="commandDownloadBtn text-center">
                    <Button className='shadow-none' variant=''>Download Commands</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
const ViewCommandsModal = ({ ViewCommandModalShow, setViewCommandModalShoww }) => {
    return (
        <>


            <MyVerticallyCenteredModal
                show={ViewCommandModalShow}
                onHide={() => setViewCommandModalShoww(false)}
            />
        </>
    );
};

export default ViewCommandsModal;