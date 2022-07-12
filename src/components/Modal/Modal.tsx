import React, { FC } from 'react';

import style from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  const isActiveStyle = (style: string, activeStyle: string, active: boolean) => {
    return active ? `${style} ${activeStyle}` : style;
  };

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setActive(false);
  };

  return (
    <Portal>
      <div className={isActiveStyle(style.modal, style.active, active)} onClick={handleModalClose}>
        <div
          className={isActiveStyle(style.modalContent, style.active, active)}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
