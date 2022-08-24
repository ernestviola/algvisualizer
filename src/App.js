import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Sortvisualizer from './routes/Sortvisualizer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sortvisualizer' element={<Sortvisualizer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
