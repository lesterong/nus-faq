import Logo from "../assets/Logo";
import Search from "../assets/Search";
import Close from "../assets/Close";
import Info from "../assets/Info";
import Modal from "./Modal";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Navbar = ({handleQuery}) => {
  const {currQuery, setQuery} = handleQuery;
  let params = useParams();
  let currCat = params.currCat;
  const isValidCat = currCat === 'prospective' || currCat === 'incoming' || currCat === 'current';
  const displayCat = currCat.charAt(0).toUpperCase() + currCat.slice(1);

  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(!!currQuery);

  const handleClose = !currQuery ? () => setShowSearch(false) : () => setQuery('');

  const hideLogo = !!showSearch
    ? 'hidden md:flex md:space-x-2'
    : 'flex space-x-2'

  return (
    <>
    {showModal && <Modal setShowModal={() => setShowModal(false)} />}
    <nav>
      <div className={hideLogo}>
        <Logo />
        <h1><b> NUS </b> CS FAQ</h1>
      </div>

      {showSearch ?
      <div className="searchbar">
        <Search />
        <input 
          type="text"
          placeholder={isValidCat ? `Searching under ${displayCat} Students`: 'Select a category to search'}
          value={currQuery || ''}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <button aria-label="Close search" onClick={handleClose}>
          <Close />
        </button>
      </div> : 
      
      <div className="flex space-x-2">
        <button
          className="focus-white"
          aria-label="Search"
          onClick={() => setShowSearch(true)}
        > 
          <Search /> 
        </button>
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