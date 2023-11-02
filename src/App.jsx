import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {

  const [alumnos, setAlumnos] = useState([])
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState("")   

  const handleSubmit = e => {
    e.preventDefault();

    if (nombre && edad) {
      const nuevoEstudiante = {
        nombre,
        edad
      };
      
      setAlumnos([...alumnos, nuevoEstudiante]);
      setNombre('');
      setEdad('');
    } else {
      alert("Todos los campos son obligatorios");
    }
  };

  const botonStyle = {
    backgroundColor: 'orange', 
    color: 'white', 
    padding: '10px 20px', 
    fontSize: '18px', 
    borderRadius: '5px',
    cursor: 'pointer', 
    border: 'none', 
    margin: '20px',

  };
  
  return (
    <div className='App'>
      <h1>Lista de Estudiantes:</h1>
      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nombre" style={{ marginRight: '10px' }}>Nombre:</label>
          <input type="text" 
            placeholder="Ingrese su nombre"
            id="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="edad" style={{ marginRight: '10px' }}>Edad:</label>
          <input type="text" 
            placeholder="Ingrese su edad"
            id="edad"
            value={edad}
            onChange={e => setEdad(e.target.value)}
          />
        </div>

        <button type="submit" style={botonStyle}>Agregar Estudiante</button>
        
        <ul>
          {alumnos.map((alumno, index) => (
            <li key={index}>
              <Card nombre={alumno.nombre} edad={alumno.edad} />
            </li>
          ))}
        </ul>
        
      </form>
      
    </div>
  );
}

export default App;
