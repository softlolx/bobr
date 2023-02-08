import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = (props) => {
  const { className } = props;

  return <div className={classNames(cn.AboutPage)}></div>;
};

export default AboutPage;
