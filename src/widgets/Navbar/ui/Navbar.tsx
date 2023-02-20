import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cn.navbar)}>
      {/* <div className={cn.links__container}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          {t('About')}
        </AppLink>
      </div> */}
    </div>
  );
};
