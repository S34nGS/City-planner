import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Map from './components/Map'
import Sidebar from './components/Sidebar';
import SavedPlaces from './pages/SavedPlaces';

export default function App() {
  return (
    <>
        <div className='app'>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Map />} />
              <Route path="/savedplaces" element={<SavedPlaces />} />
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}
