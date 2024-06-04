import { Routes, Route } from 'react-router-dom';
import Home from './index';
import About from './about';
import Navbar from './components/navbar'; 
import LogementDetail from './[id]';
import ErrorPage404 from './ErrorPage'


function App() {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path='*' element={<ErrorPage404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/:id' element={<LogementDetail/>} />
      </Routes>
      
    </div>
  );
}

export default App;
