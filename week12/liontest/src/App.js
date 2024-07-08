// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import ResultPage from './pages/ResultPage';
import Signup from './pages/Signup'; // import Signup 컴포넌트

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result/:correctCount" element={<ResultPage />} />
      <Route path="/signup" element={<Signup />} /> {/* Signup 컴포넌트와 연결 */}
    </Routes>
  );
}

export default App;
