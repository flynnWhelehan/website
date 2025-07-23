import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import MyairopsProject from './pages/MyairopsProject';
import EasyAProject from './pages/EasyAProject';
import GoogleFormulaEProject from './pages/GoogleFormulaEProject';
import HackawayV7Project from './pages/HackawayV7Project';
import GoogleTagManager from './utilities/GoogleTagManager';

function App() {
  return (
    <Router>
      <div className="App">
        <GoogleTagManager />
        <Navbar/>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/myairops-project" element={<MyairopsProject />} />
          <Route path="/easya-project" element={<EasyAProject />} />
          <Route path="/google-formulae-project" element={<GoogleFormulaEProject />} />
          <Route path="/hackaway-v7-project" element={<HackawayV7Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;