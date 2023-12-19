import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const [nama_product, setName] = useState("");
  const [description, setDesc] = useState("");
  const [rating, setRating] = useState("");
  const [harga, setHarga] = useState("");

  const handleAddProduct = async (e) => {
    // Validate input fields
    if (nama_product === "" || description === "" || rating === "" || harga === "") {
      alert('Please fill in all fields');
    } else {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8080/insert-product', {
          nama_product: nama_product,
          description: description,
          rating: rating,
          harga: harga
        });
        
        alert('Data added successfully');
    
        window.location.href = '/Order';
      } catch (error) {
        console.error('Error adding data:', error);
        alert('Failed to add data. Please try again.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '100%', margin: 'auto', padding: '20px' }}>
      <h1>Tambahkan Menu Orderan</h1>
      <form onSubmit={handleAddProduct}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nama_product">Name:</label>
          <input type="text" id="nama_product" value={nama_product} onChange={e => setName(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={e => setDesc(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="rating">Rating:</label>
          <input type="text" id="rating" value={rating} onChange={e => setRating(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="harga">Price (Rp):</label>
          <input type="text" id="harga" value={harga} onChange={e => setHarga(e.target.value)} />
        </div>

        <button type="submit" style={{ padding: '10px 40px', backgroundColor: '#f88799', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Tambah
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
