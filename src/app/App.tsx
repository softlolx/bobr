import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('App', {}, [theme])}>
      <AppRouter />
    </div>
  );
};

export default App;
