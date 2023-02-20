import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.types';
import cn from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={classNames(cn.Sidebar, { [cn.collapsed]: collapsed }, [className])}
      data-testid='sidebar'
    >
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
