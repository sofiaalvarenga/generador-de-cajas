import React from 'react';
import './BoxDisplay.css' ;
    
const BoxDisplay = (props) => {
    const boxes = props.input; //Guardar la entrada en una variable 

    return ( //Map crea una lista que asigne color de acuerdo al input registrado
        <div className='display'>
            <h3>Your boxes</h3>
            {boxes.map((item,idx)=>{
                return <div className="boxes" key={idx} style={{background: item, width:'50px', height:'50px'}}></div>})
            };
        </div>
    );
};
    
export default BoxDisplay;