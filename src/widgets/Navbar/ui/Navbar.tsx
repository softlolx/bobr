import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cn from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cn.navbar)}>
      <div className={cn.links__container}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};
