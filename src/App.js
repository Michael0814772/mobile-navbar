import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Pricing from './components/pages/Pricing';
import KeyFeatures from './components/pages/KeyFeatures';
import Demo from './components/pages/Demo';
import Navbar from './components/navbar/Navbar';
import Testimonials from './components/pages/Testimonials';

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/keyfeatures" element={<KeyFeatures />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>

      
    </div>
  );
}

export default App;
