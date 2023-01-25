import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { Suspense } from 'react';

const App = () => {
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
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
