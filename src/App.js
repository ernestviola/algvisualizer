import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Sortingvisualizer from './routes/Sortingvisualizer';
import ArraySearch from './routes/ArraySearch';
import Notfound from './routes/NotFound'

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sortingvisualizer' element={<Sortingvisualizer />} />
        <Route path='arraysearch' element={<ArraySearch />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
