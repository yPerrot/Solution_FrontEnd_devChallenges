import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MonoQuote from './pages/MonoQuote';
import MultiQuotes from './pages/MultiQuotes';
import Header from './layouts/Header';
import './App.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<MonoQuote />} />
      <Route path="/author" element={<MultiQuotes />} />
    </Routes>
  </BrowserRouter>
);
