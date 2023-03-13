import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from 'features/AuthByUsername';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { Action } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Text } from 'shared/ui/Text/Text';
import { TextTheme } from 'shared/ui/Text/Text.types';
import cn from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  isFormOpen?: boolean;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, isFormOpen } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch<ThunkDispatch<StateSchema, undefined, Action>>();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const hadleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  useEffect(() => {
    return () => {
      dispatch(loginActions.resetStore());
    };
  }, [isFormOpen]);

  return (
    <div className={classNames(cn.LoginForm)}>
      {error ? <Text text={error} theme={TextTheme.ERROR} /> : <Text title='Auth form' />}
      <Input
        value={username}
        onChange={handleChangeUsername}
        type='text'
        className={cn.login__input}
        customPlaceholder='Username'
        isFormOpen={isFormOpen}
        autofocus
      />
      <Input
        value={password}
        onChange={handleChangePassword}
        type='text'
        className={cn.login__input}
        customPlaceholder='Password'
      />
      <Button
        onClick={hadleLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cn.login__button}
        disabled={isLoading}
      >
        {t('Enter')}
      </Button>
    </div>
  );
};

export default memo(LoginForm);
