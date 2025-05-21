import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/navbar';
import HomePage from '../src/pages/Home';
import ProverbDetails from '../src/pages/proverbdetails';
import AddProverb from '../src/pages/addproverb';
import EditProverb from '../src/pages/editproverb';

function App() {
  return (
    <Router>
      <navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proverbs/:id" element={<Proverbdetails />} />
          <Route path="/add" element={<addProverb />} />
          <Route path="/edit/:id" element={<editProverb />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;