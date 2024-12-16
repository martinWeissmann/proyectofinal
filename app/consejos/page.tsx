'use client'; // Añade esta línea para convertirlo en un Client Component

import LogoButton from '@/components/ui/LogoButton';
import React from 'react';

const Consejos: React.FC = () => {
  const styles = {
    consejosContainer: {
      fontFamily: 'Arial, sans-serif',
      color: '#f49034',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      marginLeft: '0px',
      position: 'relative', // Agregado para posicionar el botón de regreso
    } as React.CSSProperties,
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '100px',
    } as React.CSSProperties,
    consejo: {
      marginBottom: '50px',
    } as React.CSSProperties,
    image: {
      margin: '20px auto',
      maxWidth: '100%',
      height: 'auto',
      paddingLeft: '1120px',
      marginTop: '-200px',
    } as React.CSSProperties,
    subtitle: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#f49034',
    } as React.CSSProperties,
    paragraph: {
      marginTop: '10px',
      fontSize: '20px',
      lineHeight: '1.5',
      color: '#666',
      maxWidth: '90vw',
    } as React.CSSProperties,
    backButton: {
      cursor: 'pointer',
      position: 'absolute',
      top: '20px',
      left: '20px',
      fontSize: '44px',
      color: '#f49034',
      backgroundColor: 'transparent', // Sin fondo gris
      background: 'none', // Sin fondo
      border: 'none', // Sin borde
      padding: 0, // Sin padding
    } as React.CSSProperties,
  };

  const handleBack = () => {
    window.history.back(); // Función para volver a la página anterior
  };

  return (
    <div style={styles.consejosContainer}>
      <button style={styles.backButton} onClick={handleBack}>
        &larr;
      </button>
      <h1 style={styles.title}>Consejos</h1>
      <LogoButton positions={{ top: '50px', right: '50px' }} />
      <div style={styles.consejo}>
        <h2 style={styles.subtitle}>1. Identifique y Maneje sus Desencadenantes</h2>
        <p style={styles.paragraph}>
          Identifique las situaciones, personas y emociones que le hacen querer fumar y desarrolle estrategias para manejarlas o evitarlas. 
          Reconocer los desencadenantes es crucial para desarrollar un plan efectivo para evitarlos o enfrentarlos sin recurrir al cigarrillo. 
          Esto incluye situaciones de estrés, consumo de alcohol, reuniones sociales donde otros fuman y momentos de aburrimiento. 
        </p>
      </div>
      <div style={styles.consejo}>
        <h2 style={styles.subtitle}>2. Utilice terapias de reemplazo de nicotina (TRN) y medicamentos recetados</h2>
        <p style={styles.paragraph}>
          Considere el uso de productos de reemplazo de nicotina como chicles, parches o inhaladores, y hable con su médico sobre medicamentos recetados como el bupropion o la vareniclina. Las TRN y los medicamentos recetados pueden aliviar los síntomas de abstinencia y reducir los antojos, aumentando las probabilidades de éxito.  
        </p>
      </div>
      <div style={styles.consejo}>
        <h2 style={styles.subtitle}>3. Busque apoyo profesional y social</h2>
        <p style={styles.paragraph}>
          Consulte a un médico, consejero especializado en cesación del tabaco o únase a un grupo de apoyo. El apoyo profesional puede proporcionar recursos, asesoramiento personalizado y programas estructurados que aumentan las probabilidades de éxito. 
        </p>
      </div>
    </div>
  );
};

export default Consejos;
