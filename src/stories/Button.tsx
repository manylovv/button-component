import React from 'react';
import './button.css';

interface ButtonProps {
  theme?: React.CSSProperties;
  label: string;
}

export const Button = ({ theme, label, ...props }: ButtonProps) => {
  return (
    <button style={theme ? theme : {}} {...props} className="default-button">
      {label}
    </button>
  );
};
