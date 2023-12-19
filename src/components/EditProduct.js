import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './../style/edit.css';

const EditProduct= () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_product: '',
    description: '',
    rating: '',
    harga: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data for edit:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/update-product-api/${id}`, formData);

      alert("Berhasil Mengubah Data Product");
      navigate('/Order'); // Redirect ke halaman list setelah update berhasil
    } catch (error) {
      console.error('Error updating data:', error);
      alert("Data Gagal diubah. Silakan coba lagi.");
    }
  };

  const { nama_product, description, rating, harga } = formData;

  return (
    <div>
      <h1 className='judul'>Edit Menu</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Nama Produk:</label>
        <input
          type="text"
          name="nama_product"
          value={nama_product}
          onChange={handleInputChange}
        />

        <label>Deskripsi:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleInputChange}
        />

        <label>Rating:</label>
        <input
          type="text"
          name="rating"
          value={rating}
          onChange={handleInputChange}
        />

        <label>Harga:</label>
        <input
          type="text"
          name="harga"
          value={harga}
          onChange={handleInputChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
