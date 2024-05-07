import React from 'react';
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
      <p>dfsdf</p>
      <div className="backdrop:blur-0 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-blue-100 ">
        
        <div
          className="relative flex h-1/2 w-1/2 flex-col overflow-auto rounded-md bg-white p-5"
          onClick={() => onClose?.()}
        >
          <button className="absolute right-0 top-0 cursor-pointer border-none bg-none p-2 text-2xl font-bold">
            &times;
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
