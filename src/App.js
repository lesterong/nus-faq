import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Accordion />
      </div>
    </div>
  );
}

export default App;
