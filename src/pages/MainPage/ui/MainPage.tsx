import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import { PageLoader } from 'shared/ui/PageLoader';
import cn from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cn.MainPage, {}, [])}>
      {t('Main page')}
      {/* <PageLoader /> */}
    </div>
  );
};

export default MainPage;
