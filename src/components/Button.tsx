import React from 'react';
import useTheme from '../hooks/useTheme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  const theme = useTheme();

  return (
    <button style={theme.button} {...props}>
      {label}
    </button>
  );
};
