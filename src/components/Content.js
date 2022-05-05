import Sidebar from "./Sidebar";
import Accordion from "./Accordion";
import Navbar from "./Navbar";
import Contribute from "./Contribute";
import { useParams, useSearchParams } from "react-router-dom";

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

  return (
    <>
    <Navbar handleQuery={handleQuery} />
    <div className="content">
      {isCat && <><Sidebar currQuery={currQuery} />
      <Accordion currQuery={currQuery} /> </>}
      {!isCat && <Contribute />}
    </div>
    </>
  )
}

export default Content;