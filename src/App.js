import Content from "./components/Content";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to='prospective' />} />
        <Route path="/:currCat" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
