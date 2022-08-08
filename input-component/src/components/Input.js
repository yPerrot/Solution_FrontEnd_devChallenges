import { useState } from 'react';

import '../Input.css'

/**
 * Props: 
 * label = string
 * placeholder = string
 * 
 * value = string
 * error = boolean
 * disabled = boolean
 * helperText = string
 * startIcon = string
 * endIcon = string
 * fullWidth = boolean
 * size = "sm" | "md"
 * 
 * multiline = boolean
 * row = string
 */
const Input = ({
    label = 'Label',
    placeholder = 'Placeholder',

    value = '',
    error = false,
    disabled = false,
    helperText = '',
    startIcon = '',
    endIcon = '',
    fullWidth = false,
    size = 'md',
  
    multiline = false,
    row = '',
}) => {

    const [ isFocus, setFocus ] = useState(false);

    const getClasses = () => {
        const err = error && !disabled ? 'input-err' : '';
        const fullWidhtClass = fullWidth ? 'input-fullwidht' : '';
        const focus = isFocus ? 'input-focus' : '';
        
        return `input-container input-size-${size} ${fullWidhtClass} ${err} ${focus}`;
    }

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    return (
        <div className={getClasses()}>
            <label>{label}</label>

            {multiline ?
                <textarea 
                    rows={row} 
                    placeholder={placeholder} 
                    disabled={disabled} 
                    defaultValue={value}

                    onFocus={handleFocus}
                    onBlur={handleBlur}
                ></textarea>
                :
                <div className='input-elem'>
                    {startIcon && <span className="material-icons start-icon">{startIcon}</span> }
                    <input 
                        placeholder={placeholder} 
                        disabled={disabled} 
                        defaultValue={value} 

                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {endIcon && <span className="material-icons end-icon">{endIcon}</span> }
                </div>
            }
            
            {helperText && <p className='input__helperText'>{helperText}</p>}
        </div>
    );

}

export default Input;