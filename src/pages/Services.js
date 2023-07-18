/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
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
                  Services
                </h1>
                <p>What we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="services-section">
        <div className="container">
          <div
            className="content mb-100"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="row">
              <div className="cardd col-lg-4 card1 cursor-item">
                <div className="num">01</div>
                <h5>Branding</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  className="btn-draw btn--white cursor-item mt-4"
                  onClick={() => navigate("/contact")}
                >
                  <span className="btn-draw__text">
                    <span>Learn more</span>
                  </span>
                </a>
              </div>
              <div className="cardd col-lg-4 card2 cursor-item">
                <div className="num">02</div>
                <h5>UI/UX</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  className="btn-draw btn--white cursor-item mt-4"
                  onClick={() => navigate("/contact")}
                >
                  <span className="btn-draw__text">
                    <span>Learn more</span>
                  </span>
                </a>
              </div>
              <div className="cardd col-lg-4 card3 cursor-item">
                <div className="num">03</div>
                <h5>Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <a
                  className="btn-draw btn--white cursor-item mt-4"
                  onClick={() => navigate("/contact")}
                >
                  <span className="btn-draw__text">
                    <span>Learn more</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
