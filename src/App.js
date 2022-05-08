import { Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import ContributeAll from './components/ContributeAll';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contribute" element={<ContributeAll />} />
      <Route path=":major/:currCat" element={<Content />} />
      <Route path=":major/*" element={<Content />} />
    </Routes>
  </div>
);

export default App;
