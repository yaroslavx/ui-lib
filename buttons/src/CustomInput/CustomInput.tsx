import React from 'react'
import './CustomInput.css'

export interface CustomInput {
    big?: boolean;
    placeholder: string;
    label: string;
}

const CustomInput: React.FC<CustomInput> = ({ big, placeholder, label, ...props }) => {

    return (
        <label>
            {label}
            <input className={`custom-input ${big ? 'big-input' : ''}`} placeholder={placeholder} {...props} />

        </label>
    )
}

export default CustomInput