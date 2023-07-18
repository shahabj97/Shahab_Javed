/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

import ImageA from "./../images/about-1.jpg";
import ImageB from "./../images/about-2.jpg";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="section-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="content-hero text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h1 className="h-title" id="quote">
                  About
                </h1>
                <p>Creative Studio Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <img src={ImageA} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 mb-3">
              <img src={ImageB} className="img-fluid" alt="" />
            </div>
          </div>
          <div
            className="row mb-80 border-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="col-lg-6">
              <h3 className="section-title">Our mission</h3>
            </div>
          </div>
          <div className="row mb-100">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a
                className="btn-draw btn--white cursor-item mt-4"
                onClick={() => navigate("/contact")}
              >
                <span className="btn-draw__text">
                  <span>Let's Talk!</span>
                </span>
              </a>
            </div>
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
