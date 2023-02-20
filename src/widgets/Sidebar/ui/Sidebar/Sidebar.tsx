import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.types';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/info-icon.svg';

import cn from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={classNames(cn.Sidebar, { [cn.collapsed]: collapsed }, [className])}
      data-testid='sidebar'
    >
      <div className={cn.links__container}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cn.link__container}>
          <HomeIcon className={cn.icon} />
          <span className={cn.link}>{t('Main')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to='/about' className={cn.link__container}>
          <AboutIcon className={cn.icon} />
          <span className={cn.link}>{t('About')}</span>
        </AppLink>
      </div>
      <Button
        type='button'
        onClick={onToggle}
        theme={ButtonTheme.BAKGROUND_INVERTED}
        data-testid='sidebar__toggleBtn'
        className={cn.collapseBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cn.switchers}>
        <ThemeSwitcher />
        <LangSwitcher collapsed={collapsed} className={cn.lang} />
      </div>
    </div>
  );
};
