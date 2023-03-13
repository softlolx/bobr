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
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cn[theme]]: true,
    [cn.square]: square,
    [cn[size]]: true,
    [cn.disabled]: disabled,
  };

  return (
    <button type='button' className={classNames(cn.Button, mods, [className])} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};
