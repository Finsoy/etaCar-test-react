import React, { FC } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
