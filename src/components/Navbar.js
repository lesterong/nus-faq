import Logo from "../assets/Logo";
import Search from "../assets/Search";
import Close from "../assets/Close";

const Navbar = ({query}) => {
  return (
    <nav>
      <div className="flex space-x-2">
        <Logo />
        <h1><b> NUS </b> CS FAQ</h1>
      </div>

      {query.isQuerying ?
      <div className="searchbar">
        <Search />
        <input 
          className="bg-transparent flex-grow"
          type="text"
          placeholder="Search..."
          value={query.currQuery}
          onChange={(e) => query.setCurrQuery(e.target.value)}
          autoFocus
        />
        <Close query={query} />
      </div> : 
      <div className="cursor-pointer" onClick={() => query.setIsQuerying(true)}> 
        <Search /> 
      </div>
      }
    </nav>
  );
}

export default Navbar;