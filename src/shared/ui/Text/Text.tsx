import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Text.module.scss';
import { TextProps, TextTheme } from './Text.types';

export const Text: FC<TextProps> = (props) => {
  const { title, text, className, theme = TextTheme.PRIMARY } = props;

  return (
    <div className={classNames(cn.Text, { [cn[theme]]: true }, [className])}>
      {title && <p className={cn.title}>{title}</p>}
      {text && <p className={cn.text}>{text}</p>}
    </div>
  );
};
