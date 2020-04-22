import React from 'react';
import departments from '../../fakeData/fakeData';

const AddDepart = () => {
    
    const handleAddData=()=>{
        const data=departments.slice(0,6);
        fetch('http://localhost:4200/addDepartments',{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('post successful',data)
        })
    }
    return (
        <div>
            <h1>Add data</h1>
            <button onClick={handleAddData}>Add data</button>
        </div>
    );
};

export default AddDepart;