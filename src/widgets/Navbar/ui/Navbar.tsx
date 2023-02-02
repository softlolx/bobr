import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cn.navbar)}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  );
};
