import React, { useState } from 'react';
import './BoxForm.css'
    
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewInput(color);
        setColor(''); //borrar el campo de entrada al enviar el formulario
    };
    
    return (
        <form className='form' onSubmit={ handleSubmit }>
            <h3>Choose a color...</h3>
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