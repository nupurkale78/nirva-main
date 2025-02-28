import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import './App.css';

// Lazy load other pages for better performance
const Cart = React.lazy(() => import('./pages/Cart'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Products = React.lazy(() => import('./pages/Products'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
