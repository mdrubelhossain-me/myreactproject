import React from "react";
import "./FlashSale.css";
import "./FlashSaleResponsive.css";
import products from "../../data/ProductData";

const FlashSale = () => {
  return (
    <div>
      <div className="flash-sale pt-5 pb-5 bg-light">
        <div className="container">
          <h3>Flash Sale</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            ducimus quis quaerat necessitatibus commodi.
          </p>
          <div className="row g-3 mt-3">
            {products.map((product) => (
              <div
                className="col-lg-2 col-md-4 col-sm-6 col-6"
                key={product.id}
              >
                <div className="card">
                  <div className="product-photo">
                    <img src={product.imgSrc} alt={product.title} />
                  </div>
                  <div className="card-body">
                    <a href="" className="product-title d-block m-0 p-0">
                      {product.title}
                    </a>
                    <div className="rating m-0 p-0">
                      {[...Array(Math.floor(product.rating))].map(
                        (_, index) => (
                          <i className="bi bi-star-fill" key={index} style={{ color: 'orange', fontSize: '12px' }}></i>
                        )
                      )}
                      {product.rating % 1 !== 0 && (
                        <i className="bi bi-star-half" style={{ color: 'orange', fontSize: '12px' }}></i>
                      )}
                    </div>
                    <div className="price">
                      <h6>৳{product.price} kg</h6>
                      <span>৳{product.originalPrice}</span>
                      <del className="mx-2">{product.discount}%</del>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
