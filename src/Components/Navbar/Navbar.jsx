import React from "react";
import './Navbar.css'
import './NavbarResponsive.css'

const Navbar = () => {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Save More on App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sell on Ecommerce
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Track My Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Singnup / Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                ভাষা
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
