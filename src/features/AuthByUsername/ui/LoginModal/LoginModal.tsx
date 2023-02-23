import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cn from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, setIsOpen } = props;

  return (
    <Modal lazyload isOpen={isOpen} setIsOpen={setIsOpen} className={classNames(cn.LoginModal)}>
      <LoginForm />
    </Modal>
  );
};
