import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

export const RootWrapper: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* <Modal isOpen={isOpen} isClosing={isClosing} onClose={handleModalClose}> */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum tempora laborum
        minus aut incidunt adipisci cupiditate sequi ex quasi iste molestiae aspernatur iusto
        repellendus, sunt corrupti fugiat earum perferendis.
      </Modal>
      <div className='page__wrapper'>
        <Sidebar />
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
