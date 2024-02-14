import React, { useState } from 'react';

const NameBox = ({setFirstName, setLastName, handleSubmit}) => {
    
    return (
        <div>
            <h1>Spirograph</h1>
            <input
                type="text"
                placeholder="First Name"
                onChange={(e)=>{setFirstName(e.target.value)}}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e)=>setLastName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default NameBox;
