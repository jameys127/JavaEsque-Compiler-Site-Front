import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CompilerPage from './components/Pages/CompilerPage'
import DocPage from './components/Pages/DocPage';
import './App.css';

function App() {
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
