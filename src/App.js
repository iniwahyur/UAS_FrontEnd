import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import './App.css';
import Order from './order/Order';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
