import { FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

export const RootWrapper: FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleModalClose = () => {
    setIsClosing(true);
    timer.current = setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='page__wrapper'>
        <Sidebar />
        <Modal isOpen={isOpen} isClosing={isClosing} onClose={handleModalClose}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum tempora laborum
          minus aut incidunt adipisci cupiditate sequi ex quasi iste molestiae aspernatur iusto
          repellendus, sunt corrupti fugiat earum perferendis.
        </Modal>
        <div className='page__content'>
          <button type='button' onClick={() => setIsOpen(true)}>
            toggle
          </button>
          <Outlet />
        </div>
      </div>
    </>
  );
};
