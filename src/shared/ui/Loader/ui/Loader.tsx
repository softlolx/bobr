import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return <span className={classNames(cn.loader, {}, [className])}>Loading</span>;
};
