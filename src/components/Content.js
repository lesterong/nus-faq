import { useParams, useSearchParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Accordion from './Accordion';
import Navbar from './Navbar';
import Contribute from './Contribute';
import Home from './Home';
import majors from '../utils/majors';

const Content = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currQuery = searchParams.get('q');
  const setQuery = (query) => setSearchParams({ q: `${query}` });
  const handleQuery = { currQuery, setQuery };

  let { major, currCat } = useParams();
  let isContribute = currCat === 'contribute';

  if (!majors.includes(major)) {
    return <Home notFound />;
  }

  return (
    <>
      <Navbar handleQuery={handleQuery} />
      <div className="content">
        {!isContribute
          ? (
            <>
              <Sidebar currQuery={currQuery} />
              <Accordion currQuery={currQuery} />
            </>
          ) : <Contribute />}
      </div>
    </>
  );
};

export default Content;
