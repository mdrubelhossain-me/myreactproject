import React from "react";
import "./Searchbar.css";
import logo from "../../../public/vite.svg";

const Searchbar = () => {
  return (
    <div className="container-fluid bg-light pt-2 pb-2 d-flex gap-3 justify-content-center align-itmes-center">
      <div>
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="search">
        <form class="d-flex" role="search">
          <input
            className="form-control rounded-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger rounded-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
