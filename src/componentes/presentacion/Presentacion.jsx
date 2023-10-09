import React from 'react';
import './presentacion.css';

function Presentacion() {
  return (<>
    <div className='redes'>
      <button>Contacto</button>
      <button>Tecnologias</button>
      <button>Proyectos</button>
    </div>
    <div className='presentacion-container'>
      <h1>¡Hola, <br />Me llamo <span>Leonardo Sombra</span>!</h1>
    </div>
  </>);
}

export default Presentacion;
