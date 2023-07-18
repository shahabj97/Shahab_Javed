import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="footer section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="go-top cursor-item" id="go-to-top">
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="hr-footer"></div>
              <div className="footer-site-logo">
                <a href="/" className="main-logo">
                  <img
                    src="images/logo.png"
                    className="logo-img light-logo img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <ul className="footer-site-social">
                <li>
                  <a href="#" className="cursor-item">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-item">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-item">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-item">
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href="#" className="cursor-item">
                    Behance
                  </a>
                </li>
              </ul>
              <p className="site-copyright">
                <small>
                  &copy; 2023 <a href="#">SJCA</a>. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer end --> */}

      {/* <!-- Circle Scroll --> */}
      <div className="circular-text">
        <span id="rotated">
          Scroll Down • Scroll Down • Scroll Down • Scroll Down • Scroll Down •
          Scroll Down •
        </span>
      </div>
    </>
  );
}
