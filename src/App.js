import Home from "./Components/Home";
import History from "./Components/History";
import Links from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Links />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
      </Routes>

    </div>
  );
}

export default App;