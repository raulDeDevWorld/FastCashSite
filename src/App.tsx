import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PoliciesPage from './pages/PoliciesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policies" element={<PoliciesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

