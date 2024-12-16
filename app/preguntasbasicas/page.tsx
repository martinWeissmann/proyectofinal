'use client'; // Convierte el componente en un Client Component 

import Link from 'next/link';
import React, { useState } from 'react';

const Preguntas: React.FC = () => {
  const [cigarrillos, setCigarrillos] = useState<number | string>(''); // Estado para almacenar el número de cigarrillos
  const [pregunta1, setPregunta1] = useState<string | null>(null);
  const [pregunta2, setPregunta2] = useState<string | null>(null);
  const [pregunta3, setPregunta3] = useState<string | null>(null);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#f49034',
      padding: '20px',
      backgroundColor: '#fff',
      textAlign: 'left',
      width: '80%',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
    } as React.CSSProperties,
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#f49034',
    } as React.CSSProperties,
    questionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px', // Ajusté el margen para la nueva pregunta
    } as React.CSSProperties,
    questionText: {
      fontSize: '18px',
      color: '#f49034',
      width: '70%',
    } as React.CSSProperties,
    options: {
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '20px',
      width: '30%',
    } as React.CSSProperties,
    option: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    } as React.CSSProperties,
    radio: {
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      backgroundColor: '#fff',
      border: '2px solid #f49034',
      borderRadius: '50%', // Forma circular para los radio buttons
    } as React.CSSProperties,
    input: {
      width: '100px',
      padding: '5px',
      fontSize: '16px',
      borderRadius: '5px',
      Left: '-40px',
      border: '1px solid #f49034',
      marginRight: '120px', // Desplaza el campo de entrada más a la izquierda

    } as React.CSSProperties,
    buttonContainer: {
      textAlign: 'center',
      marginTop: '40px',
    } as React.CSSProperties,
    button: {
      backgroundColor: '#f49034',
      color: '#fff',
      padding: '15px 50px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
    } as React.CSSProperties,
    logo: {
      position: 'absolute',
      top: '20px',
      right: '-180px',
      width: '60px',
    } as React.CSSProperties,
    vector: {
      position: 'absolute',
      top: '50px',
      left: '-120px',
      width: '100px',
    } as React.CSSProperties,
    decorImage: {
      position: 'absolute',
      bottom: '110',
      right: '0',
      top: '280px',
      left: '840px',
      width: '150px',
    } as React.CSSProperties,
  };

  // Función para manejar la redirección al hacer clic en "Enviar"
  const handleEnviarClick = () => {
    window.location.href = "http://localhost:3000/"; // Cambia '/pagina-destino' por la ruta deseada
  };

  // Función para regresar a la página anterior
  const goBack = () => {
    window.history.back();
  };

  // Maneja el cambio del valor de cigarrillos, asegurándose de no aceptar valores menores que 0
  const handleCigarrillosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 || e.target.value === '') {
      setCigarrillos(e.target.value);
    }
  };

  // Verificar si todas las preguntas han sido respondidas
  const isFormComplete = pregunta1 !== null && pregunta2 !== null && pregunta3 !== null && cigarrillos !== '';

  return (
    <div style={styles.container}>
      {/* Flecha de regreso */}
      <Link href={"/"} style={{ position: 'absolute', top: '20px', left: '-210px', cursor: 'pointer', fontSize: '50px', color: '#f49034' }}>
        ←
      </Link>

      {/* Título */}
      <h1 style={styles.title}>Preguntas de seguimiento básicas</h1>

      {/* Logo e imágenes decorativas */}
      <img src="/OS.png" alt="Logo" style={styles.logo} />
      <img src="/vector.png" alt="Vector decorativo" style={styles.vector} />
      <img src="/imagen.png" alt="Imagen decorativa" style={styles.decorImage} />

      {/* Pregunta 1 */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          1. ¿Fumaste?
        </div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                name="pregunta1" 
                style={styles.radio} 
                onChange={() => setPregunta1('Si')} 
              /> Si
            </label>
          </div>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                name="pregunta1" 
                style={styles.radio} 
                onChange={() => setPregunta1('No')} 
              /> No
            </label>
          </div>
        </div>
      </div>

      {/* Pregunta 2 */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          2. ¿Sentis menos ansiedad o estrés?
        </div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                name="pregunta2" 
                style={styles.radio} 
                onChange={() => setPregunta2('Si')} 
              /> Si
            </label>
          </div>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                name="pregunta2" 
                style={styles.radio} 
                onChange={() => setPregunta2('No')} 
              /> No
            </label>
          </div>
        </div>
      </div>

      {/* Pregunta 3 */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          3. ¿Te sentiste inquieto?
        </div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                name="pregunta3" 
                style={styles.radio} 
                onChange={() => setPregunta3('Si')} 
              /> Si
            </label>
          </div>
          <div style={styles.option}>
            <label>
              <input 
                type="radio" 
                name="pregunta3" 
                style={styles.radio} 
                onChange={() => setPregunta3('No')} 
              /> No
            </label>
          </div>
        </div>
      </div>

      {/* Pregunta adicional: ¿Cuántos cigarrillos fumaste? */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          4. ¿Cuántos cigarrillos fumaste hoy?
        </div>
        <input
          type="number"
          value={cigarrillos}
          onChange={handleCigarrillosChange}
          style={styles.input}
          placeholder="Número"
          min="0" // Esto también impide ingresar valores menores a 0
        />
      </div>

      {/* Botón de enviar */}
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button} 
          onClick={handleEnviarClick} 
          disabled={!isFormComplete} // Desactiva el botón si el formulario no está completo
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Preguntas;
