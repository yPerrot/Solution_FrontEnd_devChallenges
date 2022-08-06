import React from 'react';

/**
 * Props: 
 * text = string
 * variant = "outline" | "text" | "default"
 * disableShadow = boolean
 * disabled = boolean
 * size = "sm" | "md" | "lg" 
 * color = "default" | "primary" | " secondary" | "danger"
 * startIcon = ...
 */
const Button = ({
    disabled = false,
    disableShadow = false,
    
    text = 'Default',
    startIcon = '',
    endIcon = '',

    variant = 'default',
    size = 'md',
    color = 'default',
}) => {

    const getClasses = () => {
        const shadow = disableShadow ? 'btn-disableShadow' : '';
        return `btn-variant-${variant} btn-size-${size} btn-color-${color} ${shadow}`;
    }

    return (
        <button className={getClasses()} disabled={disabled}> 
            {startIcon && <span className="material-icons" style={{ fontSize: 18, verticalAlign: "bottom", marginRight: "9px" }}>{startIcon}</span> }
            {text}
            {endIcon && <span className="material-icons" style={{ fontSize: 18, verticalAlign: "bottom", marginLeft: "9px" }}>{endIcon}</span> }
        </button>
    );
}

export default Button; 
