import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export default function Navbar({ userData, logout }) {
  console.log('userData:', userData);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Noxe</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/movies">Movies</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/tvshow">Tvshow</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/people">People</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/network">Network</Link></li>
            </ul>
          )}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className='social-media d-flex align-items-center ms-auto mb-2 mb-lg-0'>
              <i className='fa-brands fa-facebook mx-2'></i>
              <i className='fa-brands fa-spotify mx-2'></i>
              <i className='fa-brands fa-instagram mx-2'></i>
              <i className='fa-brands fa-youtube mx-2'></i>
            </div>

            {userData ? (
              <li className="nav-item d-flex align-items-center">
                <Link className="nav-link" to="/profile">
                  Hello: {userData['first-name'] || userData['first_name']}
                </Link>
                <button
                  className="nav-link btn btn-info text-white ms-2"
                  style={{ color: 'white', backgroundColor: '#0dcaf0', borderColor: '#0dcaf0' }}
                  onClick={logout}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
