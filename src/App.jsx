import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary.jsx'; // Import ErrorBoundar
import "./App.css";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import Order from './components/order.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App