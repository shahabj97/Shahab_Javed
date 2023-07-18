/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ImageA from "./../images/contact.jpg";

export default function Contact() {
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
                  Contact
                </h1>
                <p>Get in touch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="contact-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <img src={ImageA} className="img-fluid" alt="" />
            </div>
            <div className="col-md-3">
              <div className="contact-info-v1">
                <div className="d-block">
                  <span className="d-block contact-info-label">Email</span>
                  <a href="#" className="contact-info-val">
                    info@example.com
                  </a>
                </div>
                <div className="d-block">
                  <span className="d-block contact-info-label">Phone</span>
                  <a href="#" className="contact-info-val">
                    +12 345 6789 012
                  </a>
                </div>
                <div className="d-block">
                  <span className="d-block contact-info-label">Address</span>
                  <address className="contact-info-val">
                    273 South Riverview Rd. <br /> New York, NY 10011
                  </address>
                </div>

                <div className="d-block">
                  <span className="d-block contact-info-label">Follow us</span>
                  <div className="social">
                    <a href="#" className="mr-3">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="mr-3">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="mr-3">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#" className="mr-3">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <form
                method="post"
                className="form-outline-style-v1 mb-5 mb-100"
                id="contactForm"
              >
                <div className="form-group row mb-0">
                  <div className="col-lg-6 form-group">
                    <label for="name">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label for="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="col-lg-12 form-group gsap-reveal">
                    <label for="message">Write your message...</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12 d-flex align-items-center">
                    <a
                      className="btn-draw btn--white cursor-item mt-3"
                      data-aos="fade-right"
                      data-aos-duration="1800"
                    >
                      <span
                        className="btn-draw__text"
                        onclick="document.getElementById('contactForm').submit();"
                      >
                        <span>Send message</span>
                      </span>
                    </a>
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
              <div id="form-message-warning" className="mt-4"></div>
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
