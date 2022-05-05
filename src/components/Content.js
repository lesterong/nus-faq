import Sidebar from "./Sidebar";
import Accordion from "./Accordion";
import Navbar from "./Navbar";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currQuery = searchParams.get('q');
  const setQuery = (query) => setSearchParams({q: `${query}`})

  const handleQuery = {
    currQuery: currQuery,
    setQuery: setQuery,
  }

  return (
    <>
    <Navbar handleQuery={handleQuery} />
    <div className="content">
      <Sidebar currQuery={currQuery} />
      <Accordion currQuery={currQuery} />
    </div>
    </>
  )
}

export default Content;