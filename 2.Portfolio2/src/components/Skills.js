import React from 'react'
import Fade from 'react-reveal/Fade';
function Skills() {
    return (
        <div>
        <Fade bottom cascade><h1>Skills.</h1>
         <section className="skills">
              <div className="container4">
                   <div className="align-items-center">
                        <div className="skills-content">
                            <div className="row">
                                <div className="section-title">
                                    <h1>Programming Language</h1>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="skill-box">
                                    <h6>C/C++</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in" style={{width: "86%"}}>
                                            <span>86%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h6>Python</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in" style={{width:"75%"}}>
                                            <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h6>Javascript</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in" style={{width:"80%"}}>
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h6>java</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in"  style={{width:"48%"}}>
                                            <span>48%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="skills-content">
                            <div className="row">
                                <div className="section-title">
                                    <h1>Other Skills</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="skill-box">
                                    <h6>Bootstrap</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in" style={{width:"82%"}} >
                                            <span>82%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h6>Wordpress</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in" style={{width:"55%"}}>
                                            <span>55%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h6>Pygame</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in"  style={{width:"80%"}}>
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <h6>React-Native</h6>
                                    <div className="skill-bar">
                                        <div className="skill-bar-in"  style={{width:"58%"}}>
                                            <span>58%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
              </div>
         </section>
</Fade>

        </div>
    )
}

export default Skills
