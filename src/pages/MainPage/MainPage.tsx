import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <div>
        <Link to={'/main'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <div>Main page</div>
    </div>
  );
};

export default MainPage;
