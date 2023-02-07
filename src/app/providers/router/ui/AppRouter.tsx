import App from 'app/App';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RootWrapper } from './RootWrapper';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from 'react-router-dom';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootWrapper />,
      errorElement: <div>an error</div>,
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
