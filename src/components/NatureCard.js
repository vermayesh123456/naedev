import React, { useState, useEffect } from 'react';
import DigitalClock from './DigitalClock';

const NatureCard = () => {
  const [natureData, setNatureData] = useState({ image: '', quote: '' });

  useEffect(() => {
    // Fetch random nature image from Unsplash
    fetch('https://source.unsplash.com/random/1920x1080/?nature')
      .then((response) => {
        setNatureData((prevData) => ({ ...prevData, image: response.url }));
      })
      .catch((error) => console.error('Error fetching image:', error));

    // Fetch random nature quote from Quotable API
    fetch('https://api.quotable.io/random?tags=nature')
      .then((response) => response.json())
      .then((data) => {
        setNatureData((prevData) => ({ ...prevData, quote: data.content }));
      })
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="card h-90 m-5" >
      <div className="row g-0">
        <div className="col-md-6" >
          <img src={natureData.image} className="card-img m-2 "  alt="Nature" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title"> <DigitalClock/> </h3>
            <p 
            className="card-text mt-5 pt-5 ms-5" 
            style={{
                 fontSize: "35px",
                  fontFamily: "'caveat'",
                   borderRadius:"0% 40% 0% 40%",
                    padding: "30px",
                     opacity: "0.8" ,
                     color:"#000137"
                     }}>
                {natureData.quote}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureCard;
