import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import cn from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  collapsed: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className, collapsed } = props;
  const { t, i18n } = useTranslation();

  const onLangSwitch = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      onClick={onLangSwitch}
      theme={ButtonTheme.CLEAR}
      className={classNames(cn.LangSwitcher, {}, [className])}
    >
      {t(collapsed ? 'Lang-collapsed' : 'Translation')}
    </Button>
  );
};
