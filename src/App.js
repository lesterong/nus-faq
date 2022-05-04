import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Accordion from "./components/Accordion";
import { useState } from "react";

function App() {
  const [currCat, setCurrCat] = useState(localStorage.getItem('category') || 'prospective')
  const setCat = (category) => setCurrCat(category);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar currCat={currCat} setCat={setCat} />
        <Accordion currCat={currCat} />
      </div>
    </div>
  );
}

export default App;
