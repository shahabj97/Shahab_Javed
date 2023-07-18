/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

import ImageA from "./../images/portfolio/work_8_md.gif";
import ImageB from "./../images/portfolio/work_3_a_full.jpg";
import ImageC from "./../images/portfolio/work_3_full.jpg";
import ImageD from "./../images/portfolio/work_4_full.jpg";

export default function Works() {
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
                  Works
                </h1>
                <p>Our awesome works</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="works-inner">
          <div className="container">
            <div
              className="row mb-80 border-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="filter-wrap">
                  <ul className="filter-wrapper clearfix">
                    <li>
                      <a
                        href="#"
                        data-filter="*"
                        className="selected cursor-item"
                      >
                        View all
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-item" data-filter=".design">
                        Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-item" data-filter=".brand">
                        Branding
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-item" data-filter=".web">
                        Web
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-item" data-filter=".mobile">
                        Mobile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row portfolio-items">
              <div className="col-lg-12 p-0">
                <div className="work-gallery">
                  <div className="col-md-6 single-item brand apps mobile">
                    <div className="portfolio-wrap gsap-reveal">
                      <a
                        onClick={() => navigate("/works")}
                        className="portfolio-item"
                      >
                        <img src={ImageA} alt="" className="img-fluid" />
                      </a>
                      <div className="portfolio-content">
                        <p>Design, Branding</p>
                        <h3>
                          <a onClick={() => navigate("/works")}>
                            Smart White Gadget
                          </a>
                        </h3>
                        <a
                          onClick={() => navigate("/works")}
                          className="portfolio-link"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 single-item web mobile">
                    <div className="portfolio-wrap gsap-reveal">
                      <a
                        onClick={() => navigate("/works")}
                        className="portfolio-item"
                      >
                        <img src={ImageB} alt="" className="img-fluid" />
                      </a>
                      <div className="portfolio-content">
                        <p>Web, Design</p>
                        <h3>
                          <a onClick={() => navigate("/works")}>Smart Case</a>
                        </h3>
                        <a
                          onClick={() => navigate("/works")}
                          className="portfolio-link"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 single-item design mobile">
                    <div className="portfolio-wrap gsap-reveal">
                      <a
                        onClick={() => navigate("/works")}
                        className="portfolio-item"
                      >
                        <img src={ImageC} alt="" className="img-fluid" />
                      </a>
                      <div className="portfolio-content">
                        <p>Web, Design</p>
                        <h3>
                          <a onClick={() => navigate("/works")}>Eco Sensors</a>
                        </h3>
                        <a
                          onClick={() => navigate("/works")}
                          className="portfolio-link"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 single-item web mobile">
                    <div className="portfolio-wrap gsap-reveal">
                      <a
                        onClick={() => navigate("/works")}
                        className="portfolio-item"
                      >
                        <img src={ImageD} alt="" className="img-fluid" />
                      </a>
                      <div className="portfolio-content">
                        <p>Web, Design</p>
                        <h3>
                          <a onClick={() => navigate("/works")}>Watch Design</a>
                        </h3>
                        <a
                          onClick={() => navigate("/works")}
                          className="portfolio-link"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
