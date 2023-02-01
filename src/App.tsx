import './styles/index.scss';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { Suspense, useContext, useState } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

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
      element: <MainPageLazy />,
    },
    {
      path: '/about',
      element: <AboutPageLazy />,
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
