import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Mypage } from './pages/Mypage';

const isLoggedIn = () => {
  return localStorage.getItem("access") !== null;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn() ? <Navigate to="/mypage" /> : <Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mypage" element={isLoggedIn() ? <Mypage /> : <Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
