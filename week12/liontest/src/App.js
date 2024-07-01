import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result/:correctCount" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
