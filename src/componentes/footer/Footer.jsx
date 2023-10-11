
import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer-container'>
      <h6>Contacto</h6>
       <div className='redes'>
       <FontAwesomeIcon className='icon' icon={faGithub} />
       <FontAwesomeIcon className='icon' icon={faInstagram} />
       <FontAwesomeIcon className='icon' icon={faLinkedin} /> 
    </div>
    </footer>
  );
}

export default Footer;
