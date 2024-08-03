import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className='title'>Seuss Treasury</div>
      <Routes>
        <Route path="/" element={<div>Welcome to Seuss Treasury</div>} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
