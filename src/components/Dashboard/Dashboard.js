import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [allAppointments,setAllAppointments]=useState([])
    const [selectedAppointment,setSelectedAppointment]=useState();

    const pending=allAppointments.filter(all=>all.status=="pending");
    const months=['Jan','Feb','Mar','Apr','May','Jun','July','August','Sep','Oct','Nov','Dec']
    const date=new Date();
    const date1=date.getDate();
    const month=date.getMonth();
    const year=date.getFullYear();
    const DateChanged=`${date1} ${months[month]} ${year}`;
    const todaysAppointment=allAppointments.filter(all=>all.Date==DateChanged);
    const totalPatients=allAppointments.map(all=>all._id);

    const handleStatuschange=(status)=>{
        const update={id:selectedAppointment._id,status};

          fetch("https://intense-wildwood-06571.herokuapp.com/updateStatus",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(res =>res.json())
        .then(data =>{
    
            console.log(data);
        } )
        .catch(err => console.log(err))
        
    }
    


    useEffect(()=>{
        fetch('https://intense-wildwood-06571.herokuapp.com/appointments')
        .then(res=>res.json())
        .then(data=>{
                setAllAppointments(data);
                
        })
    },[allAppointments])
    let serial=1;

    return (
        <div>
            <div className="row d-flex justify-content-center" style={{padding:'50px'}}>
                <div className="col-md-3">
                <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-body d-flex justify-content-between">
                        <h1 class="card-title">{("0"+pending.length).slice(-2)}</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'12px'}}>Pending Appointments</h5>
                </div>
                </div>
            </div>

            <div className="col-md-3">
                <div class="card text-white bg-secondary mb-3" style={{maxWidth: "18rem"}}>
                    <div class="card-body d-flex justify-content-between">
                        <h1 class="card-title">{("0"+todaysAppointment.length).slice(-2)}</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'12px'}}>Today's Appointment</h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card text-white bg-info mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-body d-flex justify-content-between">
                        <h1 class="card-title">{("0"+allAppointments.length).slice(-2)}</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'12px'}}>Total  Appointments</h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card text-white bg-success mb-3" style={{maxWidth: "18rem"}}>
                <div class="card-body d-flex justify-content-start">
                        <h1 class="card-title">{("0"+totalPatients.length).slice(-2)}</h1>
                        <h5 class="card-text" style={{textAlign:'left',paddingLeft:'15px'}}>Total Patients</h5>
                </div>
                </div>
            </div>
            </div>
            <div className="row" style={{padding:'50px'}}>
                <h3 style={{color:'#18c7be'}}>Recent Appointments</h3>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Date</th>
                        <th className="text-secondary" scope="col">Time</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone No.</th>
                        <th className="text-secondary" scope="col">Prescription</th>
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        allAppointments && allAppointments.map(alp=>
                            <tr>
                                <td>{serial++}</td>
                                <td>{alp.Date}</td>
                                <td>{alp.Time}</td>
                                <td>{alp.Name}</td>
                                <td>{alp.Mobile}</td>
                                <td><button>Add Prescription</button></td>
                                <td>
                                    <select onClick={()=>setSelectedAppointment(alp)} onChange={e=>handleStatuschange(e.target.value)}>
                                        <option selected={alp.status=="pending"}>pending</option>
                                        <option selected={alp.status=="approved"}>approved</option>
                                    </select>
                                </td>
                            
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default Dashboard;