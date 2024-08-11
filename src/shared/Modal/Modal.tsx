import React from 'react';
import { Portal } from '../Portal';

interface ModalProps {
  children?: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

export const Modal = ({ children, visible, onClose }: ModalProps) => {
  if (!visible) return null;
  return (
    <Portal>
      <div className="dark:bg-slate-800-indigo-900 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-blue-400 backdrop:blur-0 ">
        <div className="relative flex h-1/2 w-1/2 flex-col overflow-auto rounded-md bg-white p-5">
          <button
            className="absolute right-0 top-0 cursor-pointer border-none bg-none p-2 text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
