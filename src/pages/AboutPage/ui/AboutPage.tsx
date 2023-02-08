import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cn.AboutPage)}>{t('About page')}</div>;
};

export default AboutPage;
