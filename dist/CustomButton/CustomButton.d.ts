import React from 'react';
import './CustomButton.css';
export interface CustomButton {
    color: string;
    big?: boolean;
    children: React.ReactNode;
}
declare const CustomButton: React.FC<CustomButton>;
export default CustomButton;
