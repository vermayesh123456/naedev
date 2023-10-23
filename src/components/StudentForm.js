import React, { useState } from 'react';
import './main.css';
import mainbg from '../asset/bg2.mp4';
import w1 from '../asset/w1.jpeg'
import w2 from '../asset/w2.jpeg'
import w3 from '../asset/w3.jpg'

const StudentForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRollno] = useState("");
  const arr = [name, email, rollno];

  return (
    <div className="containerr">
      <div className="row mt-5">
        <div className="col-lg-12 text-center mx-auto">
          <div className="text">
            <p style={{fontSize:"80px",fontWeight:"900",position:"relative"}} className="text-white font-weight-bold mb-2">We are <span style={{color:"rgb(0, 255, 85)"}}>NAE club</span></p>
            <p style={{width:'50vw',margin:"0 auto"}} className=" text-white">Nature Adaptation Ecology, often abbreviated as NAE, is a passionate and dynamic club
committed to fostering a deeper understanding of the natural world and advocating for its
conservation. Founded with a vision of creating a positive impact on society, our organization is
driven by a shared commitment to environmental stewardship, education, and practical action.
</p>
          </div>
        </div>
      </div>

    
      <div class="row row-cols-1 row-cols-md-3 g-4 cards">
  <div class="col">
    <div class="card h-100">
      <img src={w1} class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h3 class="card-title">Photography Event Winner</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={w2} class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h3 class="card-title">Photography Event Winner</h3>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={w3} class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
      <h3 class="card-title">Photography Event Winner</h3>
      </div>
    </div>
  </div>
</div>




      <div className="Main">
        <div className="video-container">
          <video className="background-video" autoPlay muted loop>
            <source src={mainbg} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6 mx-auto">
          <h2 className="text-center mb-4">Write About Us</h2>
          <input
            onChange={(event) => setName(event.target.value)}
            className="form-control mb-3"
            type="text"
            placeholder="Enter Your Name"
            style={{background:'rgba(255, 255, 255, 0.37)',border:'none'}}
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="form-control mb-3"
            type="email"
            placeholder="Your Favourite Part about Club"
            style={{background:'rgba(255, 255, 255, 0.37)',border:'none'}}
          />
          <textarea
            onChange={(event) => setRollno(event.target.value)}
            className="form-control mb-3"
            placeholder="..."
            style={{background:'rgba(255, 255, 255, 0.37)',border:'none'}}
          />
          <button
            onClick={() => {
              props.getState(arr);
            }}
            className="btn btn-light btn-block mb-3"
            type="submit"
            style={{background:'rgba(255, 255, 255, 0.37)',border:'none'}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
