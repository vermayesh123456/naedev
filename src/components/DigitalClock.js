import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = () => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = dateTime.toLocaleTimeString('en-US', options);

    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeString.split(':');

    return (
      <span>
        <span style={{ color: '#ff0000' }}>{hours}</span>:
        <span style={{ color: '#00af00' }}>{minutes}</span>:
        <span style={{ color: '#0000ff' }}>{seconds}</span>
      </span>
    );
  };

  const formattedDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = dateTime.toLocaleDateString('en-US', options);

    // Split the date string into parts
    const dateParts = dateString.split(' ');

    return (
      <span>
        <span style={{ color: '#ff0000' }}>{dateParts[0]}</span> {/* weekday */}
        , <span style={{ color: '#00af00' }}>{dateParts[2]}</span> {/* day */}
        <span style={{ color: '#0000ff' }}>{dateParts[1]}</span> {/* month */}
        <span style={{ color: '#ff00ff' }}>{dateParts[3]}</span> {/* year */}
      </span>
    );
  };

  return (
    <div className="card h-100">
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">Date</h3>
            <p className="card-text" style={{fontFamily:"'Orbitron', sans-serif"}}>{formattedDate()}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">Time</h3>
            <p className="card-text"  style={{fontFamily:"'Orbitron', sans-serif"}}>{formattedTime()}</p>
          </div>
        </div>
      
    </div>
  );
};

export default DigitalClock;
