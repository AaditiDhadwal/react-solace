import React from 'react';
import donate from '../assets/image/donate1.jpg';
import image1 from '../assets/image/1.png';
import image2 from '../assets/image/2.png';
import image3 from '../assets/image/3.png';
import image4 from '../assets/image/4.png';
import image5 from '../assets/image/5.png';
import image7 from '../assets/image/7.png';
import image8 from '../assets/image/8.png';
import image9 from '../assets/image/9.png';
import image63 from '../assets/image/63.png';

export default function SuccessProjects() {
  return (
    <React.Fragment>
      <div className="aboutUs-banner">
        <img src={donate} alt="donate" />
        <div className="centered">
          We embrace the simple idea of giving families and communities <br />a
          source of income rahter than short-term relief.
        </div>
      </div>
      <div className="success-project">
        <h4>Solace Success Projects</h4>
        <ul>
          <li>
            <img src={image1} alt="image1" />
            <h5>30</h5>
            <h6>Income generating Businesses</h6>
          </li>
          <li>
            <img src={image2} alt="image2" />
            <h5>20</h5>
            <h6>Schools</h6>
          </li>
          <li>
            <img src={image3} alt="image3" />
            <h5>7</h5>
            <h6>Rainwater Harvesting Systems</h6>
          </li>
          <li>
            <img src={image4} alt="image4" />
            <h5>6</h5>
            <h6>Premaculture Projects</h6>
          </li>
          <li>
            <img src={image5} alt="image5" />
            <h5>4</h5>
            <h6>Internet cafes</h6>
          </li>
        </ul>
        <ul>
          <li>
            <img src={image63} alt="image1" />
            <h5>3</h5>
            <h6>Cotton Industry Projects</h6>
          </li>
          <li>
            <img src={image7} alt="image2" />
            <h5>2</h5>
            <h6>Orphanages</h6>
          </li>
          <li>
            <img src={image8} alt="image3" />
            <h5>2</h5>
            <h6>Medical Clinics</h6>
          </li>
          <li>
            <img src={image9} alt="image4" />
            <h5>1</h5>
            <h6>Community center</h6>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
