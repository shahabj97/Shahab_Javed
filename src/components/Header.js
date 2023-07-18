/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      {/* <!-- Nav mobile --> */}
      <nav className="site-mobile-menu">
        <div className="close-wrap d-flex">
          <a href="#" className="d-flex ml-auto js-menu-toggle">
            <span className="close-label">Close</span>
            <div className="close-times">
              <span className="bar1"></span>
              <span className="bar2"></span>
            </div>
          </a>
        </div>
        <div className="site-mobile-inner"></div>
      </nav>
      {/* <!-- Nav mobile end --> */}

      {/* <!-- Main Nav --> */}
      <nav className="site-nav site-nav-target">
        <div className="container">
          <div className="row align-items-center justify-content-between text-left">
            <div className="col-3">
              <div className="site-logo">
                <span
                  onClick={() => navigate("/")}
                  className="site-logo main-logo"
                >
                  <img
                    src="images/logo.png"
                    className="logo-img light-logo img-fluid"
                    alt=""
                  />
                  <h1 style={{ color: "#ffffff !important" }}>SJCA</h1>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="col text-right">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li onClick={() => navigate("/")}>
                  <span className="nav-link cursor-item">Home</span>
                </li>
                <li onClick={() => navigate("/about")}>
                  <span className="nav-link cursor-item">About</span>
                </li>
                <li onClick={() => navigate("/services")}>
                  <span className="nav-link cursor-item">Services</span>
                </li>
                <li onClick={() => navigate("/works")}>
                  <span className="nav-link cursor-item">Works</span>
                </li>
                <li onClick={() => navigate("/contact")}>
                  <span className="nav-link cursor-item">Contact</span>
                </li>
              </ul>
              <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                <li>
                  <span href="#" className="js-menu-toggle">
                    Menu
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Main Nav end --> */}
    </>
  );
}
