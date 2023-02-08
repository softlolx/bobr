import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RootWrapper } from './RootWrapper';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootWrapper />,
      errorElement: <div>404 my boi</div>,
      children: [
        {
          path: '/',
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
