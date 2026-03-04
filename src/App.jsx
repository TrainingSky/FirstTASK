import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 import Services from './pages/Services';
import About from './pages/AboutUs';

import ContactPage from './pages/ContactPage';
// import Process from './pages/Process';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} /> 
        <Route path="/work" element={<Work />} />
    
        <Route path="/about" element={<About />} />
          <Route path="/ContactPage" element={<ContactPage/>} /> 
      
          <Route path="/services" element={<Services />} />
          {/*   <Route path="/process" element={<Process />} />

   
      */}
      </Routes>
    </Router>
  );
}

export default App;
