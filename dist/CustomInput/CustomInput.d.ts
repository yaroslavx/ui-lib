import React from 'react';
import './CustomInput.css';
export interface CustomInput {
    big?: boolean;
    placeholder: string;
    label: string;
}
declare const CustomInput: React.FC<CustomInput>;
export default CustomInput;
