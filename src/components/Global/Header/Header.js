import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Header.css'
import logo from '../../../img/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = ({ setModalShow, setViewCommandModalShoww }) => {
    const navigate = useNavigate()
    const path = document.location.pathname

    return (
        <header>

            {/* header top section */}
            <section className="top">
                <Container>
                    <div className="logo">
                        <button onClick={() => navigate('/')} className='btn p-0 m-0 shadow-none'><img className='my-2' src={logo} alt="" /></button>
                    </div>
                </Container>
            </section>

            {/* header bottom */}
            <section className="buttom">
                <Container>
                    <div className="wrapper  d-sm-flex justify-content-between">
                        <div className="leftSide">
                            <h2 className='text-center'>Game builder</h2>
                        </div>
                        <div className="rightSIde">
                            <div className="button-container">
                                {
                                    path !== '/v3' ? <>
                                        <Button onClick={() => setViewCommandModalShoww(true)} variant='' className='shadow-none btn-1'>View Commands</Button>
                                        <Button onClick={() => setModalShow(true)} variant='' className='shadow-none btn-2'>Share</Button>
                                    </> : <Button variant='' onClick={() => navigate('/')} className='shadow-none btn-3'>Create your own game</Button>
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </header>
    );
};

export default Header;