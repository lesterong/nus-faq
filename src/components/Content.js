import Sidebar from "./Sidebar";
import Accordion from "./Accordion";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";

const Content = ({query}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currQuery = searchParams.get('q');
  const setQuery = (query) => setSearchParams({q: `${query}`})

  const query2 = {
    currQuery: currQuery,
    setQuery: setQuery,
  }

  return (
    <>
    <Navbar query={query2} />
    <div className="content">
      <Sidebar />
      <Accordion currQuery={currQuery} />
    </div>
    </>
  )
}

export default Content;