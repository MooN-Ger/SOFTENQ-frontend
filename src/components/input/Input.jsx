import React from 'react';
import '.input.less'

const Input = (props) => {
    return (
        <input onChange={(event=> props.setValue(event.target.value))} 
        value={props.value} 
        type={props.type} 
        placeholder={props.placeholder}/>
    )
}