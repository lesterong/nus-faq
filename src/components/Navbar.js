import Logo from "../assets/Logo";
import Search from "../assets/Search";
import Close from "../assets/Close";
import Info from "../assets/Info";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../utils/Categories";

const Navbar = ({handleQuery}) => {
  const {currQuery, setQuery} = handleQuery;
  let params = useParams();
  let currCat = params.currCat || '';  
  const isValidCat = Categories.includes(currCat)
  const displayCat = currCat.charAt(0).toUpperCase() + currCat.slice(1);

  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(!!currQuery);

  const handleClose = !currQuery ? () => setShowSearch(false) : () => setQuery('');

  const hideLogo = !!showSearch
    ? 'hidden md:flex md:space-x-2'
    : 'flex space-x-2'

  let navigate = useNavigate();
  const major = params.major;

  let navbarStyle;
  switch (major) {
    case 'cs':
      navbarStyle = "bg-cs"
      break;
    default:
      break;
  }

  return (
    <>
    {showModal && <Modal setShowModal={() => setShowModal(false)} />}
    <nav className={`${navbarStyle}`}>
      <button aria-label="Logo" className={`${hideLogo} focus-white`} onClick={() => navigate('/')}>
        <Logo major={major} />
        <h1><b> NUS </b> {major.toUpperCase()} FAQ</h1>
      </button>

      {showSearch && isValidCat ?
      <div className="flex items-center text-white md:w-8/12 md:max-w-md justify-between space-x-2 w-screen">
        <Search />
        <input 
          className="placeholder:text-white/70 focus:border-b outline-none flex-grow bg-transparent w-52"
          type="text"
          placeholder={isValidCat ? `Searching under ${displayCat} Students`: 'Select a category to search'}
          value={currQuery || ''}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <button className="focus-white" aria-label="Close search" onClick={handleClose}>
          <Close />
        </button>
      </div> :
      
      <div className="flex space-x-2">
        {isValidCat && <button
          className="focus-white"
          aria-label="Search"
          onClick={() => setShowSearch(true)}
        > 
          <Search /> 
        </button>}
        <button
          className="focus-white"
          aria-label="About this site"
          onClick={() => setShowModal(true)}
        >
          <Info />
        </button>
      </div>
      }
    </nav>
    </>
  );
}

export default Navbar;