import React, { FC } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, type, className }) => {
  return (
    <button
      disabled={disabled}
      className={`${style.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
