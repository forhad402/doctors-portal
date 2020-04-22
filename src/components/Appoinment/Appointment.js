import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Mask1 from '../../images/Mask Group 1.png';
import {
    Link,
  } from "react-router-dom";
import DoctorType from '../DoctorType/DoctorType';
const Appointment = () => {
    const [departments,setDepartments]=useState([]);
    const months=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
    const [date,setDate]=useState(new Date());
    const onChange=(date)=>{
        setDate(date);
    }

    const date1=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const fullDate=`${date1} ${months[month]} ${year}`;

    useEffect(()=>{
        fetch('https://intense-wildwood-06571.herokuapp.com/departs')
        .then(res=>res.json())
        .then(data=>{
                setDepartments(data);
        })
    },[departments])

    
    return (
        <div>
               <div className="container">
                   <div className="row d-flex justify-content-center" style={{padding:'70px'}}>
                        <div className="col-md-6 align-items-center" style={{textAlign:'left'}}>
                            <h1>Appointment</h1>
                            <Calendar onChange={onChange} value={date}></Calendar> 
                        </div>
                        <div className="col-md-6 align-items-center">
                            <img src={Mask1} width="500px" alt=""/>
                        </div>
                   </div>

               </div>
               
               <div>
                    {
                        date && <h3 style={{color:'#18c7be'}}>Appointments available on - {fullDate}</h3>
                    }
               </div>
                
                
                <div className="row d-flex justify-content-between align-items-center" style={{padding:"90px",width:'1300px'}}>
                    
                    {
                        departments.map(departments=>
                
    
                            <DoctorType
                        departments={departments}
                        fullDate={fullDate}
                        >
                        </DoctorType >
                        )
                        
                    }

                    
                </div>  
                
                    
                    
                    


        </div>
    );
};

export default Appointment;