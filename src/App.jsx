import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './pages/Work';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Process from './pages/Process';
// import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/work" element={<Work />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
