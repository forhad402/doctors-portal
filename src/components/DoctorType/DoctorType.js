import React from 'react';
import Modal from './Modal/Modal';
import './DoctorType.css';

const DoctorType = (props) => {
    const {type,time,from,available}=props.departments;
    const fullDate=props.fullDate;
    return (
        
            
            <div className="col-md-3 offset-md-0.1 justify-content-around department-cards">

                <h5 style={{color:'#18c7be'}}>{type}</h5>
                <p><strong>{time}</strong></p>
                <p style={{color:'gray'}}>{available} spaces available</p>
                <Modal  from={from} fullDate={fullDate} ></Modal>
                
            </div>
                
            
    );
};

export default DoctorType;