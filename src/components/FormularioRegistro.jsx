import React, { useState } from 'react';
import './FormularioRegistro.css';
import arrowBackImg from '../assets/arrow-back.svg';
import sendIconImg from '../assets/send-icon.svg';
import addIconImg from '../assets/add-icon.svg';


export default function FormularioRegistro() {
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [materias, setMaterias] = useState([{ nombre: '', fecha: '' }]);
const [enviado, setEnviado] = useState(false);

const handleMateriaChange = (index, field, value) => {
const nuevasMaterias = materias.map((materia, i) => {
    if (i === index) {
    return { ...materia, [field]: value };
    }
    return materia;
});
setMaterias(nuevasMaterias);
};

const agregarMateria = () => {
setMaterias([...materias, { nombre: '', fecha: '' }]);
};

const handleSubmit = (e) => {
e.preventDefault();
if (nombre && email && materias.every(m => m.nombre && m.fecha)) {
    setEnviado(true);
} else {
    alert('Por favor, complete todos los campos');
}
};

const regresarFormulario = () => {
    setEnviado(false);
    setNombre('');
    setEmail('');
    setMaterias([{ nombre: '', fecha: '' }]);
};

if (enviado) {
return (
    <div className="formulario-registro">
    <h3>¡Gracias por registrarte, {nombre}!</h3>
    <h3>Este es tu registro de materias cursadas:</h3>
    <ul>
        {materias.map((materia, index) => (
        <li key={index}>
            {materia.nombre} - {materia.fecha}
        </li>
        ))}
    </ul>
    <button onClick={regresarFormulario} className="btn btn-primary">
        <div className="btn-content">
            <img src={arrowBackImg} alt="arrow back" />
            Regresar al formulario
        </div>
    </button>
    </div>
);
}

return (
    <section className="container-registro">
        <div className="formulario-registro">
            <h2>Registro de Datos Personales</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                {materias.map((materia, index) => (
                    <div key={index} className="form-group">
                        <label htmlFor={`materia-${index}`}>Materia {index + 1}</label>
                        <input
                            id={`materia-${index}`}
                            type="text"
                            value={materia.nombre}
                            onChange={(e) => handleMateriaChange(index, 'nombre', e.target.value)}
                            required
                        />
                        <label htmlFor={`fecha-${index}`}>Fecha fin curso</label>
                        <input
                            id={`fecha-${index}`}
                            type="date"
                            value={materia.fecha}
                            onChange={(e) => handleMateriaChange(index, 'fecha', e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={agregarMateria} className="btn btn-secondary">
                    <div className="btn-content">
                        <img src={addIconImg} alt="arrow back" />
                        Agregar otra materia
                    </div>
                </button>
                <button type="submit" className="btn btn-primary">
                    <div className="btn-content">
                        <img src={sendIconImg} alt="arrow back" />
                        Enviar
                    </div>
                </button>
            </form>
        </div>
    </section>
);
}
