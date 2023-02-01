import './styles/index.scss';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { Suspense } from 'react';

import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Link to={'/main'}>Main</Link>
          <Link to={'/about'}>About</Link>
        </div>
      ),
    },
    {
      path: '/main',
      element: <MainPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
  ]);

  return (
    <div className={classNames('App', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={toggleTheme}>THEME</button>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
