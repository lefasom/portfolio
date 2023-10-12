import React from 'react';
import './presentacion.css';

function Presentacion() {
  return (
    <div className='presentacion-container'>
      <div className='sobremi'>
        <h2>Desarrollador Web - fullstack</h2>
        <h1>Leonardo Sombra </h1>
        <a className='a1' href="">Proyectos</a>
        <a className='a2' href="">Tecnologias</a>
        <a className='a3' href="">Linkedin</a>
        <a className='a4' href="">Github</a>

      </div>
      <img src="/images/cv2.png" alt="" />
    </div>);
}

export default Presentacion;
