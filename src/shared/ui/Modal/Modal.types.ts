import { ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  isOpen?: boolean;
  setIsOpen?: (x: boolean) => void;
  lazyload?: boolean;
  children: ReactNode;
}
