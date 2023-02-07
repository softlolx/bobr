import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, [collapsed]);

  return (
    <div className={classNames(cn.Sidebar, { [cn.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
};
