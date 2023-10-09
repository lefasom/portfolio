import React from 'react';
import './tec.css';
import tec from '../../api/tec_api'

function Tec() {
  return (
    <div className="chat-project">
     {tec.map((val) =>{return(
     <img key={val.id} src={val.src} alt="" />
     )})}
</div>
  );
}

export default Tec;
