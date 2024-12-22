import React from 'react'
import './HerramientasUtilizadas.css'

const HerramientasUtilizadas = () => {
const herramientas = [
"JavaScript", "React", "Node.js", "Python",
"Git", "JAVA", "MySQL", "MongoDB"
]

return (
<section className="herramientas-utilizadas">
    <h2>Herramientas Utilizadas</h2>
    <div className="herramientas-lista">
    {herramientas.map((herramienta, index) => (
        <span key={index} className="herramienta">{herramienta}</span>
    ))}
    </div>
</section>
)
}

export default HerramientasUtilizadas

