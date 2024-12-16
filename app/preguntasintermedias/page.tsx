'use client'; // Convierte el componente en un Client Component

import Link from 'next/link';
import React, { useState } from 'react';

const Preguntas: React.FC = () => {
  const [respuesta1, setRespuesta1] = useState<string | null>(null);
  const [respuesta2, setRespuesta2] = useState<string | null>(null);
  const [respuesta3, setRespuesta3] = useState<string | null>(null);

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
      marginBottom: '110px',
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

  // Función para verificar si todas las respuestas están seleccionadas
  const isFormComplete = () => {
    return respuesta1 !== null && respuesta2 !== null && respuesta3 !== null;
  };

  return (
    <div style={styles.container}>
      {/* Flecha de regreso */}
      <Link href={"/"} style={{ position: 'absolute', top: '20px', left: '-210px', cursor: 'pointer', fontSize: '50px', color: '#f49034' }}>
        ←
      </Link>

      {/* Título */}
      <h1 style={styles.title}>Preguntas de seguimiento intermedias</h1>

      {/* Logo e imágenes decorativas */}
      <img src="/OS.png" alt="Logo" style={styles.logo} />
      <img src="/vector.png" alt="Vector decorativo" style={styles.vector} />
      <img src="/imagen.png" alt="Imagen decorativa" style={styles.decorImage} />

      {/* Pregunta 1 */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          1. ¿Sentiste mejoras a días anteriores?
        </div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>
              <input
                type="radio"
                name="pregunta1"
                style={styles.radio}
                onChange={() => setRespuesta1('Si')}
              /> Si
            </label>
          </div>
          <div style={styles.option}>
            <label>
              <input
                type="radio"
                name="pregunta1"
                style={styles.radio}
                onChange={() => setRespuesta1('No')}
              /> No
            </label>
          </div>
        </div>
      </div>

      {/* Pregunta 2 */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          2. ¿Mejoró en su capacidad para respirar profundamente?
        </div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>
              <input
                type="radio"
                name="pregunta2"
                style={styles.radio}
                onChange={() => setRespuesta2('Si')}
              /> Si
            </label>
          </div>
          <div style={styles.option}>
            <label>
              <input
                type="radio"
                name="pregunta2"
                style={styles.radio}
                onChange={() => setRespuesta2('No')}
              /> No
            </label>
          </div>
        </div>
      </div>

      {/* Pregunta 3 */}
      <div style={styles.questionContainer}>
        <div style={styles.questionText}>
          3. ¿Ha notado una mejora en su nivel de energía y vitalidad?
        </div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>
              <input
                type="radio"
                name="pregunta3"
                style={styles.radio}
                onChange={() => setRespuesta3('Si')}
              /> Si
            </label>
          </div>
          <div style={styles.option}>
            <label>
              <input
                type="radio"
                name="pregunta3"
                style={styles.radio}
                onChange={() => setRespuesta3('No')}
              /> No
            </label>
          </div>
        </div>
      </div>

      {/* Botón de enviar */}
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={handleEnviarClick}
          disabled={!isFormComplete()} // Desactivar el botón si no todas las preguntas tienen respuesta
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Preguntas;
