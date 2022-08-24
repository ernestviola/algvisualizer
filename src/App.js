import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Sortvisualizer from './routes/Sortvisualizer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sortvisualizer' element={<Sortvisualizer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
