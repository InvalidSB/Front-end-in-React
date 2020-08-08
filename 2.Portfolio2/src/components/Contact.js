import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'

class Contact extends Component {
state = {  }
render() {
return (  <div>
  <h1>
  <Fade bottom cascade> Contact.</Fade>
  </h1>
  <Fade bottom>
    <div className="toppart">
      <h2 className="tophead">You Can Find Me on </h2>
      <div className="social-icons">
        <div className="facebook">
          <i className="fab fa-instagram"></i>
        </div>
        <div className="twitter">
          <i className="fab fa-github-square"></i>
        </div>
        <div className="google">
          <i className="fab fa-facebook-square"></i>
        </div>
      </div>
    </div>
    <div className="adjustit">
      <div className="downpart">
        <div className="oneside">
          <div className="form">
            <h3 className="sidehead">Contact Me via this form</h3>
            <div className="form-items">
              <input type="text" className="input" placeholder="  Enter your name"/>
              <i className="fas fa-user"></i>
            </div>
            <div className="form-items">
              <input type="text" className="input" placeholder="  Email"/>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="form-items">
              <textarea className="input message" cols="30" rows="10" placeholder="Drop a Line....."></textarea>
            </div>
          </div>
          <div className="btn submit">
            Submit  <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="anotherside">
          <div className="bigmail">
            <i className="fas fa-envelope"></i>
          </div>
          <h2 className="shortinfo">
          Or you can email me directly at :
          </h2>
          <p className="centermail">{data.contactEmail}</p>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>2020 &copy; Sujan Bhattarai</p>
    </div>
  
  
  </Fade>
  
</div>);
}
}

export default Contact;