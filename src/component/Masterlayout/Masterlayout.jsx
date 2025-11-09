import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { AuthStore } from '../../Context/AuthStore.js';

export default function Masterlayout() {
  const { userData, logout } = useContext(AuthStore);
  
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar userData={userData} logout={logout} />
      <div className="container" style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
    </>
  );
}