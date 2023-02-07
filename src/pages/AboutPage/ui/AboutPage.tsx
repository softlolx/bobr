import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='page__wrapper'>
        <Sidebar />
        <div className='page__content'>About page</div>
      </div>
    </>
  );
};

export default AboutPage;
