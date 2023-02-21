import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cn from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, setIsOpen } = props;

  const [isClosing, setIsClosing] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cn.isOpen]: isOpen,
    [cn.isClosing]: isClosing,
  };

  const handleModalClose = useCallback(() => {
    setIsClosing(true);
    timer.current = setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  }, [setIsOpen]);

  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timer.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  return (
    <Portal>
      <div className={classNames(cn.Modal, mods, [])}>
        <div className={cn.overlay} onClick={handleModalClose}>
          <div className={cn.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
