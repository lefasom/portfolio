import React from 'react';
import './tec.css';
import tec from '../../api/tec_api'

function Tec() {
  return (
  <div className="tec-container">
    <h3>Tecnologias</h3>
    <div className="tec">
      {tec.map((val) => {
        return (
          <img key={val.id} src={val.src} alt="" />
        )
      })}
    </div>
  </div>);
}

export default Tec;
