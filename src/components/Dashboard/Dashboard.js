import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import rocket from '../../img/rocket.png'
import './Dashboard.css'
import submitIcon from '../../icon/submit-icon.png'
import ShareModal from './Modals/ShareModal';
import ViewCommandsModal from './Modals/ViewCommandsModal';
import Header from '../Global/Header/Header';

const Dashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [ViewCommandModalShow, setViewCommandModalShoww] = React.useState(false);
    return (
        <>
            <Header modalShow={modalShow} setModalShow={setModalShow} ViewCommandModalShow={ViewCommandModalShow} setViewCommandModalShoww={setViewCommandModalShoww}></Header>
            <section id='full-sec'>
                <div className="container">
                    <Row>

                        <Col className='left-side' xs={12} lg={8}>
                            <div className="box d-flex justify-content-center align-items-center">
                                <div className="img">
                                    <img src={rocket} alt="" />
                                </div>
                            </div>

                            <div className="small-box">
                                <div className="top"></div>
                                <form>
                                    <div className="group d-flex justify-content-between p-3">
                                        <textarea className='p-2' placeholder='Command...' cols="90" rows="2"></textarea>
                                        <div className="btn">
                                            <button className='dashboard-submit-btn btn shadow-none' type='submit'><img src={submitIcon} alt="" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>

                        <Col className='right-side' xs={12} lg={4}>
                            <div className="btn-group d-flex justify-content-between">
                                <Button variant='' className='shadow-none'>Import</Button>
                                <Button variant='' className='export shadow-none'>Export</Button>
                                <Button variant='' className='shadow-none'>Clear All</Button>
                            </div>
                            <div className="texts">
                                <p>/* add this image of a rocket ship https://upload.wikimedia.org/wikipedia/commons/d/de/Red_left-facing_rocket_ship.svg */ <br />
                                    var rocketShip = document.createElement('img');
                                    rocketShip.src = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Red_left-facing_rocket_ship.svg';
                                    document.body.appendChild(rocketShip);
                                    <br /> <br />
                                /* make it smaller */
                                    rocketShip.style.width = '100px';
                                    rocketShip.style.height = '100px';
                                    <br /> <br />
                                /* rotate it by 135 degrees */ <br />
                                    rocketShip.style.transform = 'rotate(135deg)';
                                </p>
                            </div>
                            <div className="btn-group btn-group-2 d-flex justify-content-between">
                                <Button variant='' id='undo' className='shadow-none'>Undo</Button>
                                <Button variant='' id='redo' className='export shadow-none'>Redo</Button>
                                <Button variant='' id='edit' className='shadow-none'>Edit</Button>
                            </div>
                        </Col>
                    </Row>
                    <ShareModal modalShow={modalShow} setModalShow={setModalShow} ></ShareModal>
                    <ViewCommandsModal ViewCommandModalShow={ViewCommandModalShow} setViewCommandModalShoww={setViewCommandModalShoww}></ViewCommandsModal>
                </div>
            </section>
        </>
    );
};

export default Dashboard;