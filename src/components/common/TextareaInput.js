import React from 'react';

function TextareaInput(props) {
    let wrapperClass = "form-group";
    
    return (
        <div className={wrapperClass}>
            <div className='form-group mb-3'>
                <label htmlFor={props.id}>{props.label}</label>
                    <textarea 
                    type="text" 
                    id={props.id} 
                    name={props.name} 
                    className='form-control' 
                    onChange={props.onChange} 
                    placeholder={props.placeholder}
                    value={props.value}
                    rows={props.rows}
                    cols={props.cols}>
                    </textarea>
            </div>
        </div>
    );
}

export default TextareaInput;