import React from 'react';
import './about.css';
import bg from '../asset/leaf.jpg'

const About = () => {
  return (
    <div className='About'>
    <img id='backgroundimage' src={bg} alt="Background" />
    <div className='row' style={{overflowY:'scroll',height:"87vh",overflowX:'hidden'}}>
      <div className="col-md-8 col-sm-12 pt-5 px-5 ">
        <div className="row">
          <div className="col-md-12 mb-4 ps-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Environmental Education</h2>
                <p className="card-text">
                At the core of NAE's mission is the belief that knowledge is the key to
meaningful change. We host regular workshops, seminars, and educational events that cover a wide
range of topics related to nature, adaptation, and ecology. Our expert speakers and educators
provide insights into biodiversity, climate change, sustainable living, and the intricate relationships
that sustain our planet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4 ps-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Field Trips and Expeditions</h2>
                <p className="card-text">
                NAE offers members the opportunity to connect with nature through
exciting field trips and expeditions. These experiences immerse our members in the natural world,
offering a firsthand understanding of the ecosystems we aim to protect. Whether it's a birdwatching
excursion, a hiking adventure, or a camping trip, NAE provides memorable opportunities for
members to connect with nature.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4 ps-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Conservation Projects</h2>
                <p className="card-text">
                : We believe that a love for the environment should translate into action. NAE
actively engages in conservation projects, partnering with local organizations and authorities to
protect natural habitats, restore ecosystems, and combat pollution. Our efforts include tree-planting
initiatives, beach cleanups, and habitat restoration projects.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4 ps-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Community Outreach</h2>
                <p className="card-text">
                NAE is deeply rooted in community engagement. We collaborate with
schools, local governments, and other clubs to promote environmental awareness. Our members
engage in outreach programs, visiting schools and hosting public events to educate people of all ages
about the importance of nature and ecology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4 ps-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Research and Advocacy</h2>
                <p className="card-text">
                We encourage and support scientific research within our membership,
fostering a culture of curiosity and innovation. NAE advocates for evidence-based policies and
practices that promote sustainability and conservation. Our club actively participates in lobbying
efforts and campaigns aimed at creating a more eco-conscious society.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4  ps-3">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">How We Operate</h2>
                <p className="card-text">
                NAE operates as a democratic and inclusive organization. Membership is open to anyone passionate
about the environment, regardless of their level of expertise. We hold regular meetings to discuss
club activities, plan events, and coordinate our projects. Our club is managed by a dedicated
executive committee responsible for overseeing day-to-day operations, event planning, and
ensuring that NAE's mission and vision are upheld.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default About;
