import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

interface RootWrapperProps {}

export const RootWrapper: FC<RootWrapperProps> = (props) => {
  return (
    <>
      <Navbar />
      <div className='page__wrapper'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
