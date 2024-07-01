import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Mypage } from './pages/Mypage';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="mypage" element={<Mypage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
