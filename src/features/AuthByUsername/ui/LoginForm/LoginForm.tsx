import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { Input } from 'shared/ui/Input/Input';
import { loginActions, loginReducer } from 'features/AuthByUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { Action } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Text } from 'shared/ui/Text/Text';
import { TextTheme } from 'shared/ui/Text/Text.types';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import cn from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  isFormOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, isFormOpen, setIsOpen } = props;
  const { t } = useTranslation();
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch<ThunkDispatch<StateSchema, undefined, Action>>();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  useEffect(() => {
    store.reducerManager.add('login', loginReducer);

    return () => {
      store.reducerManager.remove('login');
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch(loginActions.resetStore());
    };
  }, [isFormOpen]);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch, store]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const hadleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password })).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setIsOpen(false);
      }
    });
  }, [dispatch, username, password]);

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
