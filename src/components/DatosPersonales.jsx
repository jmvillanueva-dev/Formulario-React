import React from 'react'
import perfilImg from '../assets/img/perfil.jpg'
import './DatosPersonales.css'

const DatosPersonales = () => {
return (
<section className="datos-personales">
    <img src={perfilImg} alt="Foto de perfil" className="perfil-img" />
    <div className="info-personal">
    <h1>Jhonny Manuel Villanueva Montoya</h1>
    <p className="contact-item location"><strong>Dirección:</strong> Mejia, Br. Aymesa</p>
    <p className="contact-item phone"><strong>Teléfono:</strong> +593 995910874</p>
    <p className="contact-item email"><strong>Correo:</strong> jhonny_villanueva7@epn.edu.ec</p>
    </div>
</section>
)
}

export default DatosPersonales

