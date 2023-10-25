import React from 'react'
import maam from '../asset/maam.png'
import './members.css'

const Members = () => {

    const cardData =[{"id":1,"imgScr":"http://dummyimage.com/100x100.png/ff4444/ffffff","heading1":"Allison","heading2":"Figge","text":"implement efficient web services"},
    {"id":2,"imgScr":"http://dummyimage.com/100x100.png/cc0000/ffffff","heading1":"Jerrie","heading2":"Pitt","text":"optimize synergistic solutions"},
    {"id":3,"imgScr":"http://dummyimage.com/100x100.png/ff4444/ffffff","heading1":"Vlad","heading2":"Brabon","text":"recontextualize holistic initiatives"},
    {"id":4,"imgScr":"http://dummyimage.com/100x100.png/ff4444/ffffff","heading1":"Truman","heading2":"Slorach","text":"deploy 24/365 e-markets"},
    {"id":5,"imgScr":"http://dummyimage.com/100x100.png/5fa2dd/ffffff","heading1":"Ripley","heading2":"Kubelka","text":"expedite world-class initiatives"},
    {"id":6,"imgScr":"http://dummyimage.com/100x100.png/5fa2dd/ffffff","heading1":"Vlad","heading2":"Attwoul","text":"architect visionary users"},
    {"id":7,"imgScr":"http://dummyimage.com/100x100.png/cc0000/ffffff","heading1":"Helena","heading2":"Brockelsby","text":"recontextualize sticky eyeballs"},
    {"id":8,"imgScr":"http://dummyimage.com/100x100.png/cc0000/ffffff","heading1":"Gael","heading2":"Ganning","text":"scale efficient markets"},
    {"id":9,"imgScr":"http://dummyimage.com/100x100.png/dddddd/000000","heading1":"Jon","heading2":"Caraher","text":"enable bleeding-edge e-business"},
    {"id":10,"imgScr":"http://dummyimage.com/100x100.png/dddddd/000000","heading1":"Carney","heading2":"Zute","text":"synthesize sexy niches"},
    {"id":11,"imgScr":"http://dummyimage.com/100x100.png/ff4444/ffffff","heading1":"Twila","heading2":"Anderer","text":"streamline back-end relationships"},
    {"id":12,"imgScr":"http://dummyimage.com/100x100.png/dddddd/000000","heading1":"Maxy","heading2":"Porson","text":"expedite web-enabled deliverables"},
    {"id":13,"imgScr":"http://dummyimage.com/100x100.png/5fa2dd/ffffff","heading1":"Kiah","heading2":"Bealing","text":"matrix plug-and-play functionalities"},
    {"id":14,"imgScr":"http://dummyimage.com/100x100.png/5fa2dd/ffffff","heading1":"Irvin","heading2":"Faithorn","text":"deliver frictionless niches"},
    {"id":15,"imgScr":"http://dummyimage.com/100x100.png/ff4444/ffffff","heading1":"Tedie","heading2":"Ipwell","text":"scale intuitive interfaces"}];

  return (
    <div className='members'>
      <div class="col-md-5  col-xl-4 col-sm-5 col-xs-4 m-auto p-5">

        <div class="card" style={{borderRadius:"15px"}}>
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img src={maam}
                class="rounded-circle" style={{width: "150px"}} alt='' />
            </div>
            <h4 class="mb-2">Dr. Premalatha L</h4>
            <p class="text-muted mb-4">Professor<span class="mx-2">|</span> <a
                href="https://chennai.vit.ac.in/">@VIT Chennai</a></p>

            <p class="text-muted mb-4">PhD	2009	EEE	Anna University
M.Tech	1997	Power Systems	Thiagarajar College of Engineering, Madurai
B.E./B.Tech	1995	EEE	Thiagarajar College of Engineering, Madurai
Post-Doctoral Experience One year in University of Malaya, Malaysia</p>
           
            <button type="button" class="btn btn-primary btn-rounded btn-lg">
             <a style={{color:'white',textDecoration:"none"}} href="https://chennai.vit.ac.in/member/dr-premalatha-l/">About Me</a>
            </button>
            <div class="d-flex justify-content-between text-center mt-5 mb-2">
              
            </div>
          </div>
        </div>
    </div>


{/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. */}
    <div className="text-center mt-5">
      <h1 className='moving-text color-changing-text moveLeftToRight'>The page is under Development</h1>
    </div>
{/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus? */}


    <div className="container mt-4 mb-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col">
            <div className="card">
              <img src={card.imgScr} className="card-img-top" alt="Sample" />
              <div className="card-body">
                <h5 className="card-title">{card.heading1}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{card.heading2}</h6>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Members
