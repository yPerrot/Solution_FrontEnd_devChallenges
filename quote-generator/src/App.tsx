import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MonoQuote from './pages/MonoQuote';
import MultiQuotes from './pages/MultiQuotes';
import Header from './layouts/Header';
import './App.scss';

function App() {
    
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MonoQuote />} />
        <Route path="/author" element={<MultiQuotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;