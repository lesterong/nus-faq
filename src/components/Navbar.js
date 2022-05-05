import Logo from "../assets/Logo";
import Search from "../assets/Search";
import Close from "../assets/Close";
import Info from "../assets/Info";
import Modal from "./Modal";
import { useState } from "react";

const Navbar = ({query}) => {
  const hideLogo = query.isQuerying
    ? 'hidden md:flex space-x-2'
    : 'flex space-x-2'
  
  const currCat = localStorage.getItem('category').charAt(0).toUpperCase() + localStorage.getItem('category').slice(1);

  const [showModal, setShowModal] = useState(false);

  const handleClose = query.currQuery === '' ? () => query.setIsQuerying(false) : () => query.setCurrQuery('');

  return (
    <>
    {showModal && <Modal setShowModal={() => setShowModal(false)} />}
    <nav>
      <div className={hideLogo}>
        <Logo />
        <h1><b> NUS </b> CS FAQ</h1>
      </div>

      {query.isQuerying ?
      <div className="searchbar">
        <Search />
        <input 
          className="bg-transparent flex-grow"
          type="text"
          placeholder={`Searching under ${currCat} Students`}
          value={query.currQuery}
          onChange={(e) => query.setCurrQuery(e.target.value)}
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
          onClick={() => query.setIsQuerying(true)}
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