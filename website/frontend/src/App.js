import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import DegreeEducation from './pages/DegreeEducation';
import MyairopsWork from './pages/MyairopsWork';
import EasyAHackathon from './pages/EasyAHackathon';
import GoogleFormulaEHackathon from './pages/GoogleFormulaEHackathon';
import HackawayV7Hackathon from './pages/HackawayV7Hackathon';
import GoogleTagManager from './utilities/GoogleTagManager';

function App() {
  return (
    <Router>
      <div className="App">
        <GoogleTagManager />
        <Navbar/>
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/degree-education" element={<DegreeEducation />} />
          <Route path="/myairops-work" element={<MyairopsWork />} />
          <Route path="/easya-hackathon" element={<EasyAHackathon />} />
          <Route path="/google-formulae-hackathon" element={<GoogleFormulaEHackathon />} />
          <Route path="/hackaway-v7-hackathon" element={<HackawayV7Hackathon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;