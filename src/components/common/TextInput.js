import React from 'react';

function TextInput(props) {
    let wrapperClass = "form-group";

    return (
        <div className={wrapperClass}>
            <div className='form-group mb-2'>
                <label htmlFor={props.id}>{props.label}</label>
                    <input 
                    type="text" 
                    id={props.id} 
                    name={props.name}
                    placeholder={props.placeholder}
                    maxLength={props.maxLength} 
                    className='form-control' 
                    onChange={props.onChange} 
                    value={props.value} />
            </div>
        </div>
    );
}

export default TextInput;