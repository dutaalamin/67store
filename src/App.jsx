import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreLayout from './components/StoreLayout';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="game/:slug" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
