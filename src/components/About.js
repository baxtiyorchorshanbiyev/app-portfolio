import React from 'react';

const About = () => {
  return (
    <>
    <main className="about">
      <div className="about-container">
        <div className="row mx-0">
          <div className="col-lg-12 section-title">
            <h1>
              About Me
            </h1>
          </div>
          <div className="col-lg-12">
            <div className="about-title">
            <h3>
              I'm Baxtiyor Chorshanbiyev and <span className="text-typed">FrontEnd Devoloper</span>
            </h3>
            <p>
              Hi, welcome to my portfolio page. I'm Baxtiyor Chorshanbiyev and a FrontEnd developer. I'm from Uzbekistan, Qarshi.
              My skills are: HTML, CSS, Sass, Bootstrap, JavaScript, React JS, Next JS.
            </p>
            </div>
          </div>
          <div className="col-lg-12 personal-title">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 pesonal-item">
                <div className="container-fluid px-0">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="personal-info">
                        <p>Email: <span>baxtiyor9703@gmail.com</span></p>
                      </div>
                      <div className="personal-info">
                        <p>City: <span>Uzbekistan, Qarshi</span></p>
                      </div>
                      <div className="personal-info">
                        <p>Phone: <span>+998 90 047 97 30</span></p>
                      </div>
                    </div>
                    <div className="col-6 col-md-6">
                      <div className="personal-info">
                        <p>Degree:<span> Strong Junior</span></p>
                      </div>
                      <div className="personal-info">
                        <p>Website:<span> baxtiyorChorshanbiyev.netlify.app</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12  skills-info">
                <div className="skills">
                  <h1 className="technical-skills">Technical Skills</h1>
                  <div className="skills-item">
                    <div className="d-flex justify-content-between">
                    <h5>HTML & CSS</h5>
                    <p>100%</p>
                    </div>
                    <div className="progress">
                      <div className="progress-in" style={{width:"100%"}}></div>
                    </div>
                    
                  </div>
                  <div className="skills-item">
                    <div className="d-flex justify-content-between">
                    <h5>Bootstrap & Sass</h5>
                    <p>96%</p>
                    </div>
                    <div className="progress">
                      <div className="progress-in" style={{width:"96%"}}></div>
                    </div>
                    
                  </div>
                  <div className="skills-item">
                    <div className="d-flex justify-content-between">
                    <h5>JavaScript</h5>
                    <p>75%</p>
                    </div>
                    <div className="progress">
                      <div className="progress-in" style={{width:"75%"}}></div>
                    </div>
                    
                  </div>
                  <div className="skills-item">
                    <div className="d-flex justify-content-between">
                    <h5>React Js</h5>
                    <p>70%</p>
                    </div>
                    <div className="progress">
                      <div className="progress-in" style={{width:"70%"}}></div>
                    </div>
                    
                  </div>
                  <div className="skills-item">
                    <div className="d-flex justify-content-between">
                    <h5>Next Js</h5>
                    <p>60%</p>
                    </div>
                    <div className="progress">
                      <div className="progress-in" style={{width:"60%"}}></div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default About;