import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import CompilerPage from './components/Pages/CompilerPage'
import DocPage from './components/Pages/DocPage';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CompilerPage />} />
          <Route path='docs' element={<DocPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
