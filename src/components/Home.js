import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = ({ notFound = false }) => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        {notFound && (
        <div className="max-w-md mx-auto">
          <h1 className="text-black my-3 md:px-0 px-3 text-center">
            The FAQ for this major is not available.
          </h1>
          <p className="md:px-0 px-3 font-normal">
            Select one of the majors below to explore, or make a major request on the&nbsp;
            <Link to="/contribute">contribution page</Link>
            .
          </p>
        </div>
        )}
        <h2 className="my-3 mx-auto text-center">
          {!notFound && 'Select a major to explore!'}
        </h2>
        <button
          type="button"
          className="major-btn"
          onClick={() => navigate('/cs/prospective')}
        >
          Computer Science
        </button>
        <button
          type="button"
          className="major-btn"
          onClick={() => navigate('/contribute')}
        >
          Contribute to NUS FAQ
        </button>
      </div>
    </>
  );
};

export default Home;
