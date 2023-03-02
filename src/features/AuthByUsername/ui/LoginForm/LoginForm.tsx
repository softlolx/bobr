import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from 'features/AuthByUsername';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import cn from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isFormOpen?: boolean;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, isFormOpen } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const login = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const hadleLoginClick = useCallback(() => {
    //
  }, []);

  return (
    <div className={classNames(cn.LoginForm)}>
      <Input
        value={login.username}
        onChange={handleChangeUsername}
        type='text'
        className={cn.login__input}
        customPlaceholder='Username'
        isFormOpen={isFormOpen}
        autofocus
      />
      <Input
        value={login.password}
        onChange={handleChangePassword}
        type='text'
        className={cn.login__input}
        customPlaceholder='Password'
      />

      <Button onClick={hadleLoginClick} theme={ButtonTheme.OUTLINE} className={cn.login__button}>
        {t('Enter')}
      </Button>
    </div>
  );
};

export default memo(LoginForm);
