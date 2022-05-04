import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Accordion from "./components/Accordion";
import { useState } from "react";

function App() {
  if (!localStorage.getItem('category')) {
    localStorage.setItem('category', 'prospective');
  }

  const [currCat, setCurrCat] = useState(localStorage.getItem('category'))
  const [currQuery, setCurrQuery] = useState('');
  const [isQuerying, setIsQuerying] = useState(false);

  const setCat = (category) => {
    setCurrCat(category);
    localStorage.setItem('category', category);
  };

  const query = {
    currQuery: currQuery,
    setCurrQuery: q => setCurrQuery(q),
    isQuerying: isQuerying,
    setIsQuerying: value => setIsQuerying(value),
  }

  return (
    <div className="App">
      <Navbar query={query} />
      <div className="content">
        <Sidebar currCat={currCat} setCat={setCat} />
        <Accordion currCat={currCat} currQuery={currQuery} />
      </div>
    </div>
  );
}

export default App;
