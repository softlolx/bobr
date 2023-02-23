import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import cn from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, setIsOpen, lazyload } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cn.isOpen]: isOpen,
    [cn.isClosing]: isClosing,
  };

  const handleModalClose = useCallback(() => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
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
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(closeTimer.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  // if (lazyload && !isMounted) {
  //   return null;
  // }

  return (
    <Portal>
      <div className={classNames(cn.Modal, mods, [className, theme])}>
        <div className={cn.overlay} onClick={handleModalClose}>
          <div className={cn.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
