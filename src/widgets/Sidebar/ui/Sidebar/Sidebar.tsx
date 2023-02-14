import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
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
        theme={ThemeButton.OUTLINE}
        data-testid='sidebar__toggleBtn'
      >
        Toggle
      </Button>
      <div className={cn.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cn.lang} />
      </div>
    </div>
  );
};
