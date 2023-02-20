import { ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  isOpen?: boolean;
  isClosing?: boolean;
  onClose?: () => void;
  children: ReactNode;
}
