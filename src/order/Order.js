import { React, useEffect, useState } from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader
} from '@coreui/react'
import axios from 'axios';
import Navbar from "../components/Navbar";
import './../style/order.css';
import { Link } from 'react-router-dom';

function Order() {
    const [data_orders, setDataOrders] = useState([]);

    const GetDataOrders = async () => {
        const getData = await axios.get('http://localhost:8080/product/');
        setDataOrders(getData.data);
    };

    useEffect(() => {
        GetDataOrders();
    }, []);

    const deleteProduct = async (id) => {
        // Display confirmation before deleting
        const shouldDelete = window.confirm('Are you sure you want to delete this product?');
    
        if (shouldDelete) {
          try {
            await axios.delete(`http://localhost:8080/delete-product-api/${id}`);
            GetDataOrders();
            alert("Product Berhasil Di Hapus");
          } catch (error) {
            console.error('Error deleting product:', error);
          }
        }
      };

    // Fungsi untuk membuat representasi bintang
    const renderStars = (rating) => {
        const starCount = parseInt(rating); // Mengambil bagian integer dari nilai rating
        const stars = Array.from({ length: starCount }, (_, index) => (
            <span key={index} className="warna">★</span>
        ));
        return stars;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(price);
      };


    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <div>
                        <h1></h1>
                        <CCard>
                            <CCardHeader>
                                <strong>Tabel Order</strong>
                                <p>Tabel ini menampilkan seluruh menu donat yang ada</p>
                                <Link to ="/AddProduct">
                                    <CButton className="edit-button">
                                    Tambah Menu
                                    </CButton>
                                </Link>
                                
                            </CCardHeader>
                            <CCardBody className="card-container">
                                {data_orders.map((item, index) => (
                                    <div key={index} className="card-item">
                                        <div className="card-box">
                                            <CCard>
                                                <CCardBody>
                                                    <h5>{item.nama_product}</h5>
                                                    <p>{item.description}</p>
                                                    <p>Rating: {renderStars(item.rating)}</p>
                                                    <p>Harga: {formatPrice(item.harga)}</p>
                                                    <div>
                                                        
                                                        <Link to={`/EditProduct/${item.id}`}>
                                                           <CButton className="edit-button">
                                                                Edit
                                                            </CButton>
                                                        </Link>
                                                            
                                                        <CButton onClick={() => deleteProduct(item.id)} className="delete-button">
                                                                Delete
                                                        </CButton>
                                                    </div>
                                                </CCardBody>
                                            </CCard>
                                        </div>
                                    </div>
                                ))}
                            </CCardBody>
                        </CCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;
