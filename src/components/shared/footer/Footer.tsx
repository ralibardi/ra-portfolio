// Suggested code may be subject to a license. Learn more: ~LicenseLog:446422004.
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="footer-logo">
          <img src="/assets/images/logo.png" alt="Logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus
          euismod, aliquam libero eu, tincidunt nunc.
        </p>
      </div>
      <div className="col-md-4">
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
