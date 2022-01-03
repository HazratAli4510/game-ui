import React from 'react';
import Header from '../../Global/Header/Header';
import rocket from '../../../img/rocket.png'
import './V3.css'

const V3 = () => {
    return (
        <>
            <Header></Header>
            <section id='v3'>
                <div className="container">
                    <div className="box-container d-flex justify-content-center align-items-center mt-5">
                        <div className="box d-flex justify-content-center align-items-center bg-white w-75 py-5">
                            <img src={rocket} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default V3;