import Content from "./components/Content";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":major/:currCat" element={<Content />} />
        <Route path=":major/*" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
