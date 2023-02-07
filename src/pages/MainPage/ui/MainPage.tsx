import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className='page__wrapper'>
        <Sidebar />
        <div className='page__content'>Main page</div>
      </div>
    </>
  );
};

export default MainPage;
