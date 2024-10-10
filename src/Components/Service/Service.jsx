import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="overflow-hidden bg-light pt-4 pb-4">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="item d-flex gap-3 justify-content-center align-items-center">
              <div className="icon">
                <i class="bi bi-car-front"></i>
              </div>
              <div className="i-title">
                <h6>Free Shipping</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="item d-flex gap-3 justify-content-center align-items-center">
              <div className="icon">
              <i class="bi bi-airplane"></i>
              </div>
              <div className="i-title">
                <h6>Grocery Shopping</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="item d-flex gap-3 justify-content-center align-items-center">
              <div className="icon">
              <i class="bi bi-cart"></i>
              </div>
              <div className="i-title">
                <h6>Shopping Mall</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="item d-flex gap-3 justify-content-center align-items-center">
              <div className="icon">
              <i class="bi bi-heart-pulse"></i>
              </div>
              <div className="i-title">
                <h6>Health Care</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
