import React, { useState } from 'react';
import Navbar from './Navbar';
import lpbImage from './../assets/lpb.png';
import phone from './../assets/phone.png';
import './../style/LandingPage.css'; // Mengimpor file CSS
import { Link } from 'react-router-dom';

function LandingPage() {
  // State untuk menyimpan nilai pencarian
  const [searchValue, setSearchValue] = useState('');

  // Mengubah nilai pencarian
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <div className="image-container">
        <img src={lpbImage} alt="Gambar LPB" />
        <div className="text-on-image">
          <h1 className='h1'>Make Delivery And</h1>
          <h1>Enjoy Soft and Delicious</h1>
          <h1>Donuts</h1>
        </div>
        
        <div className="search-menu">
          <input
            type="search"
            placeholder="Find your location on delivery..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button onClick={() => alert(`Searching for: ${searchValue}`)}>
            Search
          </button>
        </div>
        
        <div className="contact-container">
          <p className="contact-delivery">CONTACT YOUR DELIVERY</p>
          <img src={phone} alt="phone" className="phone-icon" />
          <p className="contact-phone">+62 461 3201547</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
