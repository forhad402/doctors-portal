import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import { useForm } from 'react-hook-form';
const Modal1 = (props) => {
  const [isBooked,SetIsBooked]=useState(false);
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
       
      // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
    //   Modal.setAppElement('Modal1')
       
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
       
      
        function closeModal(){
          setIsOpen(false);
        }
    const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
      const appointmentdetail={Time:data.time,Date:props.fullDate,Name:data.name, Mobile:data.phone,Gender:data.gender,Age:data.age,status:"pending"};
      console.log(appointmentdetail);
      fetch('https://intense-wildwood-06571.herokuapp.com/addAppointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(appointmentdetail) // body data type must match "Content-Type" header
    })
      .then(res => res.json())
      .then(appointments => {
        console.log(appointments);
      })
   }
   if(isBooked){
     setTimeout(()=>SetIsBooked(false),2000);
   }

    return (
        <div>
            <button className="btn" style={{backgroundColor:'#18c7be',color:'white', border:'none'}} onClick={openModal}>Book Appointment</button>
        <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

                        <h5>Appointment on {props.fullDate}</h5>
                        {isBooked && 

                          <p className="text-success">Appointment Submitted</p>
                        }
                        
                        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>

                        <select className="form-control"  name="time" ref={register({ required: true })} >
                            <option disabled={true} selected value="not added">Select Time</option>
                            <option  value={props.from[0]}>{props.from[0]}</option>
                            <option value={props.from[1]}>{props.from[1]}</option>
                            <option value={props.from[2]}>{props.from[2]}</option>
                            <option value={props.from[3]}>{props.from[3]}</option>
                        </select>
                        {errors.time && <span>This field is required</span>}
                        <br/>
      
                        {/* include validation with required or other standard HTML validation rules */}
                        <input  className="form-control" type="text" name="name" placeholder="Your Name" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span>This field is required</span>}
                        <br/>
                        <input className="form-control" type="text" name="phone" placeholder="Your Phone Number" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.phone && <span>This field is required</span>}
                        <br/>

                        <select className="form-control"  name="gender" ref={register({ required: true })} >
                            <option disabled={true} selected value="not added">Select Gender</option>
                            <option  value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {/* errors will return when field validation fails  */}
                        {errors.gender && <span>This field is required</span>}
                        <br/>
                        <input className="form-control" type="number" name="age" placeholder="Your Age" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.age && <span>This field is required</span>}
                        <br/>
                        <input className="btn btn-success" onClick={()=>SetIsBooked(true)} type="submit" value="Book" />
                        <button className="btn btn-danger" onClick={closeModal}>close</button>
                     </form>

                     </Modal>
            
                
        </div>
    );
};

export default Modal1;