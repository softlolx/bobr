import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props;

  return <div className={classNames(cn.MainPage, {}, [])}></div>;
};

export default MainPage;
