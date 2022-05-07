import Sidebar from "./Sidebar";
import Accordion from "./Accordion";
import Navbar from "./Navbar";
import Contribute from "./Contribute";
import { useParams, useSearchParams } from "react-router-dom";
import Home from "./Home";
import Majors from "../utils/Majors"

const Content = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const currQuery = searchParams.get('q');
  const setQuery = (query) => setSearchParams({q: `${query}`})

  const handleQuery = {
    currQuery: currQuery,
    setQuery: setQuery,
  }

  let params = useParams();
  let isContribute = params.currCat === 'contribute';

  if (!Majors.includes(params.major)) {
    return <Home notFound={true}/>
  }

  return (
    <>
    <Navbar handleQuery={handleQuery} />
    <div className="content">
      {!isContribute ?
        <>
        <Sidebar currQuery={currQuery} />
        <Accordion currQuery={currQuery} /> 
        </> :
        <Contribute />
      }
    </div>
    </>
  )
}

export default Content;