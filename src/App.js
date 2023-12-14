import { 
  BrowserRouter, 
  Routes, 
   Route 
} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './components/about/About';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
      <Route path="/calculator" element={<Calculator />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
