import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
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
