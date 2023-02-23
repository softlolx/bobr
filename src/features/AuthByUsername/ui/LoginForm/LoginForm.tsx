import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cn from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isFormOpen?: boolean;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, isFormOpen } = props;
  const { t } = useTranslation();

  const [value, setValue] = useState({ username: '', password: '' });

  const onChangeUsername = (value: string) => {
    setValue((prev) => {
      return { ...prev, username: value };
    });
  };

  const onChangePassword = (value: string) => {
    setValue((prev) => {
      return { ...prev, password: value };
    });
  };

  return (
    <div className={classNames(cn.LoginForm)}>
      <Input
        value={value.username}
        onChange={onChangeUsername}
        type='text'
        className={cn.login__input}
        placeholder='Username'
        isFormOpen={isFormOpen}
        autofocus
      />
      <Input
        value={value.password}
        onChange={onChangePassword}
        type='text'
        className={cn.login__input}
        placeholder='Password'
      />

      <Button className={cn.login__button}>{t('Enter')}</Button>
    </div>
  );
};
