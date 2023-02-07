import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
  ]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Navbar /> */}
      <div className='page__wrapper'>
        <Sidebar />
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
};

export default AppRouter;
