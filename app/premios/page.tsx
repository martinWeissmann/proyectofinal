'use client'; // Añade esta línea para convertirlo en un Client Component

import { getData } from "@/lib/firebase";
import { set } from "date-fns";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Awards: React.FC = () => {

  const [awards, setAwards] = useState<{ progreso: number; nombre: string }[]>([]);

  useEffect(() => {
    getData("users").then((data) => {
      const aux = data!.filter( item => item.progreso > 0 ).sort( (a,b) => b.progreso - a.progreso ).slice(0,2);
      setAwards(aux);
    })
  }, []);

  const styles = {
    container: {
      textAlign: "center",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      position: "relative",
    } as React.CSSProperties,
    backArrow: {
      cursor: "pointer",
      position: "absolute",
      top: "20px",
      left: "20px",
      fontSize: "44px",
      color: "#f48325",
    } as React.CSSProperties,
    header: {
      marginBottom: "2rem",
    } as React.CSSProperties,
    trophy: {
      width: "80px",
      height: "auto",
      marginBottom: "1rem",
      margin: "0 auto",
      display: "block",
    } as React.CSSProperties,
    title: {
      fontSize: "2.5rem",
      color: "#f48325",
    } as React.CSSProperties,
    description: {
      fontSize: "1rem",
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
    } as React.CSSProperties,
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
    } as React.CSSProperties,
    card: {
      border: "2px solid #f48325",
      borderRadius: "28px",
      padding: "3rem",
      width: "280px",
      textAlign: "center",
      marginLeft: "30px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    } as React.CSSProperties,
    name: {
      fontSize: "1.5rem",
      color: "#f48325",
      marginBottom: "0.5rem",
    } as React.CSSProperties,
    percentage: {
      fontSize: "1rem",
      color: "#333",
    } as React.CSSProperties,
  };

  const Card = (props:{ progreso: number; nombre: string }) => (<div style={styles.cardsContainer}>
    <div style={styles.card}>
      <h2 style={styles.name}>{props.nombre.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}</h2>
      <p style={styles.percentage}>
        Redujo su porcentaje en un <strong>{props.progreso.toFixed(2)}%</strong>
      </p>
    </div>
  </div>)

  return (
    <div style={styles.container}>
      {/* Flecha de regreso */}
      <Link style={styles.backArrow} href={"/"}>
        ←
      </Link>

      <header style={styles.header}>
        {/* Copa encima del título */}
        <img src="/premios.png" alt="Trophy" style={styles.trophy} />
        <h1 style={styles.title}>Premios</h1>
        <p style={styles.description}>
          Cada semana mostraremos las estadísticas de los usuarios que más avanzaron
          en el proceso para demostrar que nuestro servicio te puede ayudar a que
          tu vida sin humo comience hoy.
        </p>
      </header>
      <div className="flex flex-wrap gap-8 justify-center">

     {  awards.map((award) => <Card key={award.progreso} {...award} />)}
      </div>
    </div>
  );
};

export default Awards;
