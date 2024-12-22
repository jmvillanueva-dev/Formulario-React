import React from 'react'
import './DeportesFavoritos.css'
import futbolImg from '../assets/img/futbol.jpg'
import baloncestoImg from '../assets/img/baloncesto.jpg'
import tenisImg from '../../public/tenis.jpg'
import natacionImg from '../../public/natacion.jpg'

const DeportesFavoritos = () => {
const deportes = [
{ nombre: "Fútbol", imagen: futbolImg },
{ nombre: "Baloncesto", imagen: baloncestoImg },
{ nombre: "Tenis", imagen: tenisImg },
{ nombre: "Natación", imagen: natacionImg }
]

return (
<section className="deportes-favoritos">
    <h2>Deportes Favoritos</h2>
    <div className="deportes-galeria">
    {deportes.map((deporte, index) => (
        <div key={index} className="deporte-item">
        <img src={deporte.imagen} alt={deporte.nombre} />
        <h3>{deporte.nombre}</h3>
        </div>
    ))}
    </div>
</section>
)
}

export default DeportesFavoritos

