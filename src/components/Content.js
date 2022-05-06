import Sidebar from "./Sidebar";
import Accordion from "./Accordion";
import Navbar from "./Navbar";
import Contribute from "./Contribute";
import { useParams, useSearchParams } from "react-router-dom";
import Home from "./Home";

const Content = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currQuery = searchParams.get('q');
  const setQuery = (query) => setSearchParams({q: `${query}`})

  const handleQuery = {
    currQuery: currQuery,
    setQuery: setQuery,
  }

  let params = useParams();
  let isCat = params.currCat !== 'contribute';

  if (params.major !== 'cs' && params.major !== 'contribute') {
    return <Home notFound={true}/>
  }

  return (
    <>
    <Navbar handleQuery={handleQuery} />
    <div className="content">
      {(isCat && params.major !== 'contribute') &&
        <>
        <Sidebar currQuery={currQuery} />
        <Accordion currQuery={currQuery} /> 
        </>
      }
      {(!isCat || params.major === 'contribute') && <Contribute />}
    </div>
    </>
  )
}

export default Content;