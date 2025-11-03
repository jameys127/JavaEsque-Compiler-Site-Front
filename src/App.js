import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import CompilerPage from './components/Pages/CompilerPage'
import DocPage from './components/Pages/DocPage';
import './App.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<CompilerPage />} />
            <Route path='docs' element={<DocPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
