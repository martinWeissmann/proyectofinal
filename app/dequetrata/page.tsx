'use client'; // Asegura que el componente sea un Client Component

import { useUserStore } from "@/store/store";
import Link from "next/link";
import React from "react";

const AboutSection: React.FC = () => {
  // Estilos
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "3rem 1rem",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
      minHeight: "100dvh",
    } as React.CSSProperties,
    title: {
      fontSize: "2.5rem",
      color: "#f48325",
      marginBottom: "1rem",
      textAlign: "center",
    } as React.CSSProperties,
    description: {
      fontSize: "1.2rem",
      color: "#555",
      lineHeight: "1.6",
      textAlign: "center",
      maxWidth: "800px",
      marginBottom: "2rem",
    } as React.CSSProperties,
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "2rem",
    } as React.CSSProperties,
    cardContainer: {
      display: "flex",
      justifyContent: "space-around",
      gap: "2rem",
      flexWrap: "wrap",
      width: "100%",
      marginTop: "2rem",
    } as React.CSSProperties,
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "260px",
      maxWidth: "100%",
    } as React.CSSProperties,
    cardTitle: {
      fontSize: "1.8rem",
      color: "#f48325",
      marginBottom: "1rem",
    } as React.CSSProperties,
    cardDescription: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.5",
    } as React.CSSProperties,
    backButton: {
      position: "absolute" as "absolute",  // No es necesario "as" si React ya entiende el tipo
      top: "20px",
      left: "20px",
      cursor: "pointer",
      fontSize: '44px',

      color: "#f48325", // Color de la flecha
    },
  };

  // Función para ir hacia atrás
  const goBack = () => {
    window.history.back();
  };


  return (
    <div style={styles.container}>
      {/* Botón de flecha para regresar */}
      <Link style={styles.backButton} href={"/"}>
        ← 
      </Link>

      <h2 style={styles.title}>¿De qué se trata?</h2>
      <p style={styles.description}>
        Nuestro servicio está diseñado para ayudarte a dejar de fumar de forma
        efectiva y personalizada. Sabemos que dejar este hábito no es fácil, pero
        con el apoyo adecuado y herramientas motivacionales, puedes lograrlo. En
        nuestra plataforma, te ofrecemos un seguimiento continuo, consejos
        prácticos y un sistema de recompensas para mantenerte motivado en el
        proceso.
      </p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Motivación Constante</h3>
          <p style={styles.cardDescription}>
            Te proporcionamos actualizaciones semanales y premios que te
            motivan a seguir adelante.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Apoyo Personalizado</h3>
          <p style={styles.cardDescription}>
            Ofrecemos un enfoque único para cada usuario, adaptándonos a tus
            necesidades y ritmo.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Resultados Medibles</h3>
          <p style={styles.cardDescription}>
            Con nuestro sistema de seguimiento, podrás ver tu progreso y los
            beneficios a medida que avanzas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
