import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <div>
        <Link to={'/main'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <div>About page</div>
    </div>
  );
};

export default AboutPage;
