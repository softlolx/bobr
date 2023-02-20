import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, isClosing, onClose } = props;

  const onContentClick = (evt: React.MouseEvent) => evt.stopPropagation();

  return (
    <div className={classNames(cn.Modal, { [cn.isOpen]: isOpen, [cn.isClosing]: isClosing }, [])}>
      <div className={cn.overlay} onClick={onClose}>
        <div className={cn.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
