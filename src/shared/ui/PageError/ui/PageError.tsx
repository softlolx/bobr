import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cn from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cn.PageError)}>
      <h1>Oops, smth went wrong</h1>
      <h3>Feel free to reload page by clicking the button below</h3>
      <Button>Reload</Button>
    </div>
  );
};
