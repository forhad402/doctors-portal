import React from 'react';
import {Link} from "react-router-dom";
import Mask1 from '../../images/Mask Group 1.png';

const Banner = () => {
    return (
        <div>
            <div className="banner-container justify-content-center">
                <div className="row d-flex align-items-center" style={{padding:'90px',textAlign:'left'}}>
                    <div className="col-md-5 justify-content-center">
                        <h1>Your New Smile Start Here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq</p>
                        <Link to="/getAppointment"><button className="btn btn-primary">Get Appointment</button></Link>
                    </div>
                    <div className="col-md-7">
                        <img width="600px" src={Mask1} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;