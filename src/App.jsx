import { Routes, Route } from 'react-router-dom';
import Home from './index';
import About from './about';
import Navbar from './components/navbar'; 

function App() {
  return (
    <div>
      <Navbar />  {/* Navbar ajouté ici */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
