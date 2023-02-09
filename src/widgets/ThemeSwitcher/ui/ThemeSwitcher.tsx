import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import cn from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className={classNames(cn.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};
