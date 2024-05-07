import React from 'react';
import '../../index.css';
import { Portal } from '../Portal';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  visible?: boolean;
}

export const Modal = ({ children, onClose, visible }: ModalProps) => {
  if (!visible) return null;
  return (
    <Portal>
      <div className="text-5xl">
        <div onClick={() => onClose?.()}>
          <button>&times;</button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
