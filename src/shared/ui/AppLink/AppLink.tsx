import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} className={classNames(cn.AppLink, {}, [className, cn[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
