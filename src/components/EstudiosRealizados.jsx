import React from 'react'
import './EstudiosRealizados.css'

const EstudiosRealizados = () => {
const estudios = [
"Tecnología en Desarrollo de Software",
"Máster en Ciberseguridad",
"Curso de Especialización en Inteligencia Artificial",
"Certificación en Desarrollo de Aplicaciones Móviles"
]

return (
<section className="estudios-realizados">
    <h2>Estudios Realizados</h2>
    <ol>
    {estudios.map((estudio, index) => (
        <li key={index}>{estudio}</li>
    ))}
    </ol>
</section>
)
}

export default EstudiosRealizados
