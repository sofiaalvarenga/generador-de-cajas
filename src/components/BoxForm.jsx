import React, { useState } from 'react';
import './BoxForm.css'
    
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewInput(color);
        setColor(''); //Valor del estado al enviar el formulario
    };
    
    return (
        <form className='form' onSubmit={ handleSubmit }>
            <label htmlFor='color'>Choose a color:</label>
            <input className='color-input'
                type='text' 
                placeholder="Enter your box color"
                onChange={ (e) => setColor(e.target.value) }
                value={ color }>
            </input>
            <input className='submit' type="submit" value="Add"/>
        </form>
    );
};
    
export default BoxForm;