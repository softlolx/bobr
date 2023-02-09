import { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageLoader } from 'shared/ui/PageLoader';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { RootWrapper } from './RootWrapper';

const ErrorBoundaryLayout = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootWrapper />,
      // errorElement: <NotFoundPage />,
      children: [
        {
          element: <ErrorBoundaryLayout />,
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
      ],
    },
  ]);

  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
