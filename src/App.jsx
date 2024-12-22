// Estudiante: Jhonny Villanueva M.

import React from 'react'
import DatosPersonales from './components/DatosPersonales'
import EstudiosRealizados from './components/EstudiosRealizados'
import HerramientasUtilizadas from './components/HerramientasUtilizadas'
import DeportesFavoritos from './components/DeportesFavoritos'
import './App.css'
import FormularioRegistro from './components/FormularioRegistro'

function App() {
  return (
    <div className="container">
      <DatosPersonales />
      <EstudiosRealizados />
      <HerramientasUtilizadas />
      <DeportesFavoritos />
      <FormularioRegistro />
    </div>
  )
}

export default App

