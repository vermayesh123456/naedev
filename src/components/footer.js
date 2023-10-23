import React from 'react';
import vit from '../asset/Vlogo2.png'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Social Media Links */}
          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a style={{color:"white"}} href="https://www.instagram.com/nae_club_vitcc/">Instagram</a>
              </li>
              <li>
                <a  style={{color:"white"}}  href="#!">Facebook</a>
              </li>
              <li>
                <a  style={{color:"white"}}  href="#!">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Logos */}
          <div className="col-md-3">
            <h5>Faculty coordinator</h5>
            <p>Dr. Premalatha L</p>
            <p>Phone: +91 737-343-8656</p>
            
           
          </div>

          {/* Website Creator Info */}
          <div className="col-md-3">
            <h5>Website Creator</h5>
            <p>Yash Verma</p>
            <p>Email: vermayesh123456@gmail.com</p>
            <p>Phone: +91 895-373-1260</p>
            <a style={{color:"white",textDecoration:"none"}} href="https://www.instagram.com/yashverma2202/">Instagram</a>
          </div>
          <div className="col-md-3">
           <img style={{width:"300px"}} src={vit} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
