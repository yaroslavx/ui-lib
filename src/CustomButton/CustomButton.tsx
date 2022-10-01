import React from 'react';
import './CustomButton.css'

export interface CustomButton {
  color: string;
  big?: boolean;
  children: React.ReactNode
}

const CustomButton: React.FC<CustomButton> = ({ children, color, big, ...props }) => {
  return (
    <button {...props} className={`custom-button ${big ? 'big-button' : ''}`} style={{ color }}>
      {children}
    </button>
  );
};

export default CustomButton;
