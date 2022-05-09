import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import AboutModal from './AboutModal';
import Logo from '../assets/Logo';
import Search from '../assets/Search';
import Close from '../assets/Close';
import Info from '../assets/Info';
import categories from '../utils/categories';
import majors from '../utils/majors';
import styleScheme from '../utils/styleScheme';

const Navbar = ({ handleQuery = {} }) => {
  let navigate = useNavigate();
  const { currQuery, setQuery } = handleQuery;
  let { major, currCat = '' } = useParams();
  const { bgColor = 'bg-black' } = styleScheme[major] || {};
  const isValidCat = categories.includes(currCat);
  const displayCat = currCat.charAt(0).toUpperCase() + currCat.slice(1);

  const [showAbout, setShowAbout] = useState(false);
  const [showSearch, setShowSearch] = useState(!!currQuery);

  const handleClose = !currQuery ? () => setShowSearch(false) : () => setQuery('');

  const hideLogo = showSearch
    ? 'hidden md:flex md:space-x-2'
    : 'flex space-x-2';

  return (
    <>
      <AboutModal isOpen={showAbout} onRequestClose={() => setShowAbout(false)} />
      <nav className={bgColor}>
        <button
          type="button"
          aria-label="Logo"
          className={`${hideLogo} focus-white`}
          onClick={() => navigate('/')}
        >
          <Logo />
          <h1>
            <b> NUS </b>
            {majors.includes(major) && major.toUpperCase()}
            {majors.includes(major) && <span>&nbsp;</span>}
            FAQ
          </h1>
        </button>

        {showSearch && isValidCat
          ? (
            <div className="flex items-center text-white md:w-8/12 md:max-w-md justify-between space-x-2 w-screen">
              <Search />
              <input
                className="placeholder:text-white/70 focus:border-b outline-none flex-grow bg-transparent w-52"
                type="text"
                placeholder={isValidCat ? `Searching under ${displayCat} Students` : 'Select a category to search'}
                value={currQuery || ''}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className="focus-white"
                aria-label={currQuery ? 'Clear Search' : 'Close Search'}
                onClick={handleClose}
              >
                <Close />
              </button>
            </div>
          )
          : (
            <div className="flex space-x-2">
              {isValidCat && (
                <button
                  type="button"
                  className="focus-white"
                  aria-label="Search"
                  onClick={() => setShowSearch(true)}
                >
                  <Search />
                </button>
              )}
              <button
                type="button"
                className="focus-white"
                aria-label="About this site"
                onClick={() => setShowAbout(true)}
              >
                <Info />
              </button>
            </div>
          )}
      </nav>
    </>
  );
};

export default Navbar;
