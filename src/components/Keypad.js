import React from 'react';

function KeyPad(){
    function handleChange(event){
        console.log('Entering password...')
    }

    return (
        <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password"
      />
    )

}

export default KeyPad;