import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RootWrapper } from './RootWrapper';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootWrapper />,

      errorElement: <NotFoundPage />,
      children: [
        {
          path: '*',
          element: <NotFoundPage />,
        },
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
