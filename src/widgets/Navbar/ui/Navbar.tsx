import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../../../entities/User';
import cn from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onShowAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(userActions.logOut());
  }, []);

  if (authData) {
    return (
      <div className={classNames(cn.navbar)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cn.links} onClick={handleLogOut}>
          {t('Sign out')}
        </Button>
        <LoginModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
      </div>
    );
  }

  return (
    <div className={classNames(cn.navbar)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cn.links} onClick={onShowAuthModal}>
        {t('Sign in')}
      </Button>
      <LoginModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
    </div>
  );
};
