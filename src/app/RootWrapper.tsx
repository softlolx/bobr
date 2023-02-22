import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const RootWrapper: FC = () => (
  <>
    <Navbar />
    <div className='page__wrapper'>
      <Sidebar />
      <div className='page__content'>
        <Outlet />
      </div>
    </div>
  </>
);
