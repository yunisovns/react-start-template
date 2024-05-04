import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  elementId?: string;
}

export const Portal: React.FC<PortalProps> = ({ children, elementId = 'root' }) => {
  return createPortal(children, document.getElementById(elementId) || document.body);
};
