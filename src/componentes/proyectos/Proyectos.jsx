import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Detail from '../detail/Detail'
import Presentacion from '../presentacion/Presentacion'



import proyectos from "../../api/proyectos_api"
import './proyectos.css'
function Proyectos() {
    console.log(proyectos)
    return (
        <div>

            <div className="container">
                {proyectos.map((val) => {
                    return (

                        <div className="card" key={val.id}>
                            <div className='img'>
                                <img src={val.src} alt={val.name} />
                                <div className="link">
                                    <a href={val.sitio}>Ver demo</a>
                                    <button>Desarrollo</button>
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
