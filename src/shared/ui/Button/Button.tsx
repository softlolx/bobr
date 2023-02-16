import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, //
    children,
    theme,
    square,
    size,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cn[theme]]: true,
    [cn.square]: square,
    [cn[size]]: true,
  };

  return (
    <button type='button' className={classNames(cn.Button, mods, [className])} {...otherProps}>
      {children}
    </button>
  );
};
