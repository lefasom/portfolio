
import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
       <div className='redes'>
       <FontAwesomeIcon icon={faGithub} />
       <FontAwesomeIcon icon={faInstagram} />
       <FontAwesomeIcon icon={faLinkedin} /> 
    </div>
    </div>
  );
}

export default Footer;
