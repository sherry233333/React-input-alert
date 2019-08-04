import React from "react";
import "./css/button.css"

function Button(props){

    return(
        <a href='javascript:' className='button' onClick={props.click} style={props.style}>{props.name}</a>
    );
}

export default Button;