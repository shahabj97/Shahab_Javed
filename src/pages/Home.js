/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

import Banner from "./../images/home.JPG";

import WorkA from "./../images/portfolio/work_3_full.jpg";
import WorkB from "./../images/services-1.gif";
import WorkC from "./../images/services-2.gif";
import WorkD from "./../images/services-3.gif";

import PortfolioA from "./../images/portfolio/work_8_md.gif";
import PortfolioB from "./../images/portfolio/work_3_a_full.jpg";
import PortfolioC from "./../images/portfolio/work_4_full.jpg";

import LogoA from "./../images/logos/logo01.png";
import LogoB from "./../images/logos/logo02.png";
import LogoC from "./../images/logos/logo05.png";
import LogoD from "./../images/logos/logo06.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* <!-- Main content wrap --> */}
      <div className="cover-v1 jarallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="heading text-white">
                Creative <br /> <span id="quote">Studio Design</span>
              </h1>
              <p className="subheading  text-white">
                We cover a large range of creative digital
                <br />
                projects, platforms, and campaigns to
                <br />
                create experiences.
              </p>
              <a
                className="btn-draw btn--white cursor-item mt-3"
                onClick={() => navigate("/about")}
              >
                <span className="btn-draw__text">
                  <span>Explore more</span>
                </span>
              </a>
            </div>
            <div className="distortion"></div>
            <div className="distortion-desc">
              <p className="hero-desc">
                <i>
                  ”We love what we do and we work with great clients to create
                  thoughtful and purposeful websites.”
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <h3 className="section-title">About</h3>
            </div>
            <div className="col-lg-4">
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

      <div className="section" id="services-section">
        <div className="container">
          <div className="row mb-80 border-section">
            <div className="col-lg-6">
              <h3 className="section-title">Services</h3>
            </div>
            <div className="col-lg-6">
              <p>
                Bespoke brand & digital services designed for bussinesses <br />{" "}
                big and small...
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="project-list">
                <div className="project">
                  <div className="project-title">
                    <h5>Branding</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      <br /> adipiscing elit sed do eiusmod
                    </p>
                  </div>
                  <div className="project-categ">01</div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h5>Packaging</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      <br /> adipiscing elit sed do eiusmod
                    </p>
                  </div>
                  <div className="project-categ">02</div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h5>UI/UX</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      <br /> adipiscing elit sed do eiusmod
                    </p>
                  </div>
                  <div className="project-categ">03</div>
                </div>
                <div className="project">
                  <div className="project-title">
                    <h5>Development</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur
                      <br /> adipiscing elit sed do eiusmod
                    </p>
                  </div>
                  <div className="project-categ">04</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services_active owl-carousel">
                <div className="single_testmonial">
                  <div className="testmonial_info">
                    <img src={WorkB} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="single_testmonial">
                  <div className="testmonial_info">
                    <img src={WorkC} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="single_testmonial">
                  <div className="testmonial_info">
                    <img src={WorkD} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-100">
            <div className="owl-carousel logo-slider">
              <div className="logo-v1 cursor-item ">
                <img src={LogoA} alt="Image" className="img-fluid" />
              </div>
              <div className="logo-v1 cursor-item">
                <img src={LogoB} alt="Image" className="img-fluid" />
              </div>
              <div className="logo-v1 cursor-item">
                <img src={LogoC} alt="Image" className="img-fluid" />
              </div>
              <div className="logo-v1 cursor-item">
                <img src={LogoD} alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row mb-80 border-section">
            <div className="col-lg-6">
              <h3 className="section-title">Works</h3>
            </div>
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
                      <img src={PortfolioA} alt="" className="img-fluid" />
                    </a>
                    <div className="portfolio-content">
                      <p>Design, Branding</p>
                      <h3>
                        <a onClick={() => navigate("/")}>Smart White Gadget</a>
                      </h3>
                      <a
                        onClick={() => navigate("/")}
                        className="portfolio-link"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 single-item web mobile">
                  <div className="portfolio-wrap gsap-reveal">
                    <a onClick={() => navigate("/")} className="portfolio-item">
                      <img src={PortfolioB} alt="" className="img-fluid" />
                    </a>
                    <div className="portfolio-content">
                      <p>Web, Design</p>
                      <h3>
                        <a onClick={() => navigate("/")}>Smart Case</a>
                      </h3>
                      <a
                        onClick={() => navigate("/")}
                        className="portfolio-link"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 single-item design mobile">
                  <div className="portfolio-wrap gsap-reveal">
                    <a onClick={() => navigate("/")} className="portfolio-item">
                      <img src={WorkA} alt="" className="img-fluid" />
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
                    <a onClick={() => navigate("/")} className="portfolio-item">
                      <img src={PortfolioC} alt="" className="img-fluid" />
                    </a>
                    <div className="portfolio-content">
                      <p>Web, Design</p>
                      <h3>
                        <a onClick={() => navigate("/")}>Watch Design</a>
                      </h3>
                      <a
                        onClick={() => navigate("/")}
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
    </>
  );
}
