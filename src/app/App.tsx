import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('App', {}, [theme])}>
      <AppRouter />
    </div>
  );
};

export default App;
