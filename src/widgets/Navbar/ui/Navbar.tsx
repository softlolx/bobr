import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { Modal } from 'shared/ui/Modal/Modal';
import cn from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cn.navbar)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cn.links} onClick={toggleAuthModal}>
        {t('Sign in')}
      </Button>
      <Modal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen}>
        .
      </Modal>
    </div>
  );
};
