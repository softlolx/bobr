import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const AppRouter = () => {
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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
