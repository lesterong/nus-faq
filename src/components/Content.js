import Sidebar from "./Sidebar";
import Accordion from "./Accordion";
import Navbar from "./Navbar";

const Content = ({query}) => {
  return (
    <>
    <Navbar query={query}/>
    <div className="content">
      <Sidebar />
      <Accordion currQuery={query.currQuery} />
    </div>
    </>
  )
}

export default Content;