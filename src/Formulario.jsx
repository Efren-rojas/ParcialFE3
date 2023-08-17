
import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length < 3) {
      alert('Por favor ingresa un nombre válido');
      return;
    }
    if (color.trim().length < 6) {
      alert('Por favor ingresa un color válido');
      return;
    }
    alert(`Hola ${nombre}, tu color favorito es ${color}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <br />
      <label htmlFor="color">Color favorito:</label>
      <input
        type="text"
        id="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;