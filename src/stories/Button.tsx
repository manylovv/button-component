import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: React.CSSProperties;
  label: string;
}

export const Button = ({ theme, label, ...props }: ButtonProps) => {
  return (
    <button style={theme ? theme : {}} className="default-button" {...props}>
      {label}
    </button>
  );
};
