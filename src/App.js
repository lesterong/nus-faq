import Content from "./components/Content";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isQuerying, setIsQuerying] = useState(false);
  const query = {
    isQuerying: isQuerying,
    setIsQuerying: value => setIsQuerying(value),
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to='prospective' />} />
        <Route
          path="/:currCat"
          element={<Content query={query} />}
        />
      </Routes>
    </div>
  );
}

export default App;
