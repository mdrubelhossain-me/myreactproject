import React from "react";
import "./FlashSale.css";
import "./FlashSaleResponsive.css";
import p1 from "../../assets/images/Product/apple.png";
import p2 from "../../assets/images/Product/banana.png";
import p3 from "../../assets/images/Product/carrots.png";
import p4 from "../../assets/images/Product/cauliflower.png";
import p5 from "../../assets/images/Product/cumcumber.png";
import p6 from "../../assets/images/Product/egg.png";
import p7 from "../../assets/images/Product/grapes.png";
import p8 from "../../assets/images/Product/potato.png";
import p9 from "../../assets/images/Product/tomato.png";

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
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p1} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Apple
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳200 kg</h6>
                    <span>৳250</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p2} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Banana
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳40 </h6>
                    <span>৳50</span>
                    <del className="mx-2">10%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p3} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Carrots
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳200 kg</h6>
                    <span>৳250</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p4} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Cauliflower
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳100 kg</h6>
                    <span>৳150</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p5} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Cucumber
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳70 kg</h6>
                    <span>৳150</span>
                    <del className="mx-2">40%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p6} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Egg
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳200</h6>
                    <span>৳250</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p7} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Grapes
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳200 kg</h6>
                    <span>৳250</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p8} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Potato
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳100 kg</h6>
                    <span>৳200</span>
                    <del className="mx-2">50%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p9} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Tomato
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳100 kg</h6>
                    <span>৳200</span>
                    <del className="mx-2">50%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p1} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Apple
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳200 kg</h6>
                    <span>৳250</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p2} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Banana
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳40 </h6>
                    <span>৳50</span>
                    <del className="mx-2">10%</del>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className="card">
                <div className="product-photo">
                  <img src={p3} alt="" />
                </div>
                <div className="card-body">
                  <a href="" className="product-title d-block m-0 p-0">
                    Fresh Carrots
                  </a>
                  <div className="ratting m-0 p-0">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                  <div className="price">
                    <h6>৳200 kg</h6>
                    <span>৳250</span>
                    <del className="mx-2">30%</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
