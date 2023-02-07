import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <button onClick={() => navigate('/about')}>about</button> */}
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
