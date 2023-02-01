import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('App', {}, [theme])}>
      <button onClick={toggleTheme}>THEME</button>
      <AppRouter />
    </div>
  );
};

export default App;
