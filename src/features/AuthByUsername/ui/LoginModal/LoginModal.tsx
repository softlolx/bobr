import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader';
import cn from './LoginModal.module.scss';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

export interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, setIsOpen } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={classNames(cn.LoginModal)}>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy isFormOpen={isOpen} setIsOpen={setIsOpen} />
      </Suspense>
    </Modal>
  );
};
