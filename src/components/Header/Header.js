import React from 'react';
import {
    Link,
  } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a class="nav-item nav-link active" style={{paddingRight:'64px'}} href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" style={{paddingRight:'64px'}} href="/dashboard">Dashboard</a>
                <a class="nav-item nav-link" style={{paddingRight:'64px'}} href="/appointmentsFilter">Appointments</a>
                <a class="nav-item nav-link" style={{paddingRight:'124px'}} href="#">Contact Us</a>
                </div>
                
            </div>
            
            </nav>
            </div>
        </div>




            /* <h1>Welcome to Portal</h1>
            <Link to="/dashboard"> 
                Dashboard
            </Link>
            <Link to="/getAppointment">
                Get Appointment
            </Link>
            <Link to="/appointmentsFilter">
                Appointments
            </Link>
        </div> */
    );
};

export default Header;