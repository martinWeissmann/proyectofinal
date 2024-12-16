"use client";

import { addData, auth } from "@/lib/firebase";
import { helperData } from "@/lib/utils";
import { useUserStore } from "@/store/store";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";

const App: React.FC = () => {

  // Function to handle navigation
  const user = useUserStore((state) => state);
 
  const handleClick = () =>{
    signOut(auth)
    user.logout()
  }

  const loadData = async () => {
    addData( "users", helperData() )
  };

  return (
    <div style={styles.app}>
      { /* <button onClick={loadData}>Load data</button> */ }
      <header style={styles.header}>
        <div style={styles.logo}>
        
          <img src="/qs.png" style={styles.image} />
        </div>
        <div style={styles.icons}>
          {/* Quinta Sección primero */}
      
          <Link style={styles.icon} href="/dequetrata">
            <img
              src="/pre.png"
              alt="Quinta Sección"
              style={styles.iconImage}
              />
            <p style={styles.iconText}>¿De que se trata?</p>
          </Link>

          {/* Las demás secciones */}
          <Link style={styles.icon} href="/calendario">
            <img
              src="/calendario.png"
              alt="Calendario"
              style={styles.iconImage}
            />
            <p style={styles.iconText}>Calendario</p>
          </Link>
          <Link style={styles.icon} href={"/consejos"}>
            <img
              src="/consejos.png"
              alt="Consejos"
              style={styles.iconImage}
            />
            <p style={styles.iconText}>Consejos</p>
          </Link>
          <Link style={styles.icon} href={"/medicos"}>
            <img
              src="/medicos.png"
              alt="Medicos"
              style={styles.iconImage}
            />
            <p style={styles.iconText}>Medicos</p>
          </Link>
          <Link style={styles.icon} href={"/premios"}>
            <img
              src="/premios.png"
              alt="Premios"
              style={styles.iconImage}
            />
            <p style={styles.iconText}>Premios</p>
          </Link>
        </div>
      </header>
    { user.email
       ? <button style={styles.logout} onClick={handleClick}> Cerrar sesion </button> 
       :  (<Link href={"/signin"}>
        <img
          src="/ppa.png"
          style={styles.ppa}
        />
      </Link>) }
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center" as "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
   
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
  },
  image: {
    margin: "20px auto",
    maxWidth: "100%",
    height: "auto",
    marginLeft: "170px",
    width: "380px",
  } as React.CSSProperties,
  vector: {
    position: "absolute" as "absolute",
    maxWidth: "100%",
    height: "auto",
    top: "0",
    left: "0",
    transform: "translateX(-200px)"
  } as React.CSSProperties,
  icons: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: "800px",
    position: "relative" as 'relative',
    marginTop: "10vh",
  },
  icon: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
  },
  iconImage: {
    width: "130px",
    height: "180px",
    marginBottom: "10px",
    cursor: "pointer", // Make it look clickable
  },
  iconText: {
    fontSize: "18px",
    fontWeight: "bold" as "bold",
    color: "#000000", // Color negro
  },
  ppa: {
    position: "absolute" as "absolute",
    width: "100px",
    height: "100px",
    bottom: "50px",
    right: "50px",
    zIndex: 1,
    cursor: "pointer", // Make it look clickable
  },
  logout: {
    position: "absolute" as "absolute",
    top: "50px",
    right: "50px",
    zIndex: 1,
    cursor: "pointer", // Make it look clickable
    backgroundColor: "orange",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold" as "bold",
  }
};

export default App;
