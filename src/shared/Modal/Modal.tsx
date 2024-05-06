import React from 'react';
import { Portal } from '../Portal';
import s from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  visible?: boolean;
}

export const Modal = ({ children, onClose, visible }: ModalProps) => {
  if (!visible) return null;
  return (
    <Portal>
      <div className={s.overlay}>
        <div className={s.modal} onClick={() => onClose?.()}>
        <button className={s.close}>&times;</button>
        {children}
        </div>
      </div>
    </Portal>
  );
};
