import React, { FC } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, type }) => {
  return (
    <button disabled={disabled} className={style.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
