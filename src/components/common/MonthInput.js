import React from 'react';

function MonthInput(props) {
    let wrapperClass = "form-group";

    return (
        <div className={wrapperClass}>
            <div className='form-group mb-3'>
                <label htmlFor={props.id}>{props.label}</label>
                <input 
                type="month" 
                id={props.id} 
                name={props.name} 
                placeholder={props.placeholder} 
                className='form-control' 
                onChange={props.onChange} 
                value={props.value} />
            </div>
        </div>
    );
}

export default MonthInput;