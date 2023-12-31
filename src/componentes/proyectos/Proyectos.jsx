import { useState } from 'react'
import Detail from '../detail/Detail'
import Presentacion from '../presentacion/Presentacion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


import proyectos from "../../api/proyectos_api"
import './proyectos.css'


function Proyectos() {
    return (
        <div className='proyecto-container'>


            <h3>Proyectos</h3>
            <div className="container">
                {proyectos.map((val) => {
                    return (

                        <div className="card" key={val.id}>
                            <div className='img'>
                                <img src={val.src} alt={val.name} />
                                <div className="link">

                                    {Object.keys(val.cod).map((key) =>
                                    (
                                        <a href={val.cod[key][0]} key={key}>
                                            <FontAwesomeIcon
                                                icon={val.cod[key][1] == 'faCode' ? faCode : faLink}
                                            />
                                            {key}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <h3 className="name" >{val.name}</h3>
                            <div className="tecno">
                                <p>{val.tecno}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Proyectos
