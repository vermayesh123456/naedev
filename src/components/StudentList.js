import React from 'react';
import './main.css';
import mainbg from '../asset/bg.mp4';
import design from '../asset/design1.jpg'
import market from '../asset/marketing.png'
import eventm from '../asset/EM.jpg'
import content from '../asset/content.png'

function StudentList() {
  return (
    <div className="Main">
      <div className="video-container">
        <video className="background-video" autoPlay muted loop>
          <source src={mainbg} type="video/mp4" />
        </video>
      </div>
      <div class="container d-flex align-items-center justify-content-center flex-wrap">
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src={design} alt="Design"/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-dark fs-5">Design</h3>
                        <ul class="list">
                            <li style={{color:'red'}}>Ria Susan</li>
                            <li style={{color:'green'}}>S.Sankavitha</li>
                            <li style={{color:'purple'}}>Ayush Upadhyay </li>
                            <li style={{color:'darkorange'}}>Sruthi Mahesh </li>
                            <li style={{color:'Magenta'}}>Akshaya.G </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src={eventm} alt="Event management"/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-dark fs-5">Event Management</h3>
                        <ul class="list">
                            <li style={{color:'red'}}>Madhumitha Vemula</li>
                            <li style={{color:'green'}}>Archit Vishnoi</li>
                            <li style={{color:'purple'}}>N.CHANDANA </li>
                            <li style={{color:'darkorange'}}>Vivek K</li>
                            <li style={{color:'Magenta'}}>Shriya A</li>
                            <li style={{color:'red'}}>S.A.HARINI</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src={market} alt="Marketing"/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-dark fs-5">Marketing</h3>
                        <ul class="list">
                            <li style={{color:'red'}}>Ann Maria Joby</li>
                            <li style={{color:'green'}}>Kavin Harendran</li>
                            <li style={{color:'purple'}}>Nihara Rajesh</li>
                            <li style={{color:'darkorange'}}>Aryaman Agrawal</li>
                            <li style={{color:'Magenta'}}>Anshika Acharya</li>
                            <li style={{color:'blue'}}>Narmadha J S</li>
                            <li style={{color:'cadetblue'}}>Kamalesh R</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer bg-white">
                    <img src={content} alt="content"/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-dark fs-5">Content</h3>
                        <ul class="list">
                            <li style={{color:'red'}}>Pasala Sri Varshitha</li>
                            <li style={{color:'green'}}>N.Shenbaga krithika</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="congratulation">
        <h1 style={{color:"pink"}}>Congratulations</h1>
        <p>We are thrilled to welcome you to our vibrant community of passionate individuals. Your selection not only represents your talent and dedication but also the unique qualities that make our club exceptional.

In the NAE Club, we believe in fostering creativity, collaboration, and continuous learning. You are now a part of a supportive network where ideas flourish, friendships are formed, and dreams take flight.

As you embark on this exciting journey with us, remember that your presence enriches our community. Your unique perspective, skills, and enthusiasm will contribute to the success of our club and make it an even more inspiring place to be.

We encourage you to embrace every opportunity, challenge yourself, and, most importantly, enjoy the experience. Feel free to express yourself, share your thoughts, and engage with others. Together, we will create memorable moments and achieve great things.

Once again, congratulations on your achievement! We are confident that you will make valuable contributions and help us continue to thrive as a community. <br /> Welcome to the NAE Club family! 🌟

<br /> Best regards,</p>
    </div>
      
    </div>
  );
}

export default StudentList;
