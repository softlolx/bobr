import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cn from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cn.LoginForm)}>
      <input type="text" className={cn.login__input} />
      <input type="text" className={cn.login__input} />
      <Button className={cn.login__button}>{t('Enter')}</Button>
    </div>
  );
};
