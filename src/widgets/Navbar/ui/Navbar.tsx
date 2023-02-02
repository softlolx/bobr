import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cn.navbar)}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
        About
      </AppLink>
    </div>
  );
};
