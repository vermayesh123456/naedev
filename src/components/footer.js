import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Twitter</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Logos */}
          <div className="col-md-4">
            <h5>Logos</h5>
            {/* Add your logo images here */}
            <img src="logo1.png" alt="Logo 1" className="mr-3" />
            <img src="logo2.png" alt="Logo 2" className="mr-3" />
            <img src="logo3.png" alt="Logo 3" />
          </div>

          {/* Website Creator Info */}
          <div className="col-md-4">
            <h5>Website Creator</h5>
            <p>Yash Verma</p>
            <p>Email: vermayesh123456@gmail.com</p>
            <p>Phone: +91 895-373-1260</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
