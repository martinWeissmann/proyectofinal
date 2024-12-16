'use client'; // Convierte el componente en un Client Component

import { useUserStore } from '@/store/store';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const getPrimerDiaDelMes = (mes: number, anio: number): number => {
  return (new Date(anio, mes - 1, 1).getDay() + 6) % 7; // Ajusta para que lunes sea el primer día
};

const getDiasEnMes = (mes: number, anio: number): number => {
  return new Date(anio, mes, 0).getDate();
};

const Calendario: React.FC = () => {
  const user = useUserStore((state) => state);
  const router = useRouter();
  const hoy = new Date(); // Fecha actual
  const mesActual = hoy.getMonth() + 1;
  const anioActual = hoy.getFullYear();
  const diaActual = hoy.getDate();

  const [mes, setMes] = useState(mesActual);
  const [anio, setAnio] = useState(anioActual);

  const dias = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];
  const primerDia = getPrimerDiaDelMes(mes, anio);
  const diasEnMes = getDiasEnMes(mes, anio);

  const redirigirPagina = () => {
    if( user.email && user.data?.fechas ){
      const fechas = user.data.fechas
      if( fechas.length > 0 && fechas[fechas.length - 1].fecha == new Date().toLocaleDateString() ){
        router.push("/grafico");
      }else{
        router.push("/preguntas");
      }
    }else{
      router.push("/signin");
    }
  };

  

  const totalCeldas = primerDia + diasEnMes;
  const totalFilas = Math.ceil(totalCeldas / 7);
  const celdasVisibles = totalFilas * 7;

  return (
    <div style={contenedor}>
      <Link style={flechaRegreso} href={"/"}>
        ←
      </Link>
      <h1 style={titulo}>{new Date(anio, mes - 1).toLocaleString('es-ES', { month: 'long' })} {anio}</h1>
      <div style={diasSemana}>
        {dias.map((dia) => (
          <span key={dia} style={diaSemana}>{dia}</span>
        ))}
      </div>
      <div style={calendario}>
        {Array.from({ length: celdasVisibles }, (_, i) => {
          if (i < primerDia || i >= primerDia + diasEnMes) {
            return <div key={i} style={diaContenedor} className="vacío"></div>;
          }
          const dia = i - primerDia + 1;
          const esHoy = dia === diaActual && mes === mesActual && anio === anioActual;

          return (
            <div
              key={i}
              style={esHoy ? { ...diaContenedor, ...diaActualEstilo } : diaContenedor}
              onClick={esHoy ? redirigirPagina : undefined} // Solo permite clic en la fecha actual
            >
              {dia}
            </div>
          );
        })}
      </div>

      <div style={elementosDecorativos}>
        <img 
          src="/vector.png" 
          alt="Línea Decorativa" 
          style={lineaIzquierda} 
        />
        <img 
          src="/OS.png" 
          alt="Logo" 
          style={logo} 
        />
        <img 
          src="/imagen.png" 
          alt="Curva Decorativa" 
          style={curvaDerecha} 
        />
      </div>
    </div>
  );
};

// Aquí están tus estilos...

const contenedor: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
  padding: '10px',
};

const flechaRegreso: React.CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  top: '20px',
  left: '20px',
  fontSize: '44px',
  color: '#F7931E',
};

const titulo: React.CSSProperties = {
  fontSize: '24px',
  color: '#F7931E',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '0',
  textAlign: 'center',
  textTransform: 'uppercase',
};

const diasSemana: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '90%',
  maxWidth: '500px',
  textAlign: 'center',
  marginBottom: '130px',
};

const diaSemana: React.CSSProperties = {
  fontSize: '14px',
  color: '#F7931E',
  fontWeight: 'bold',
  padding: '45px',
  gridColumnGap: '110px',
  marginLeft: '-70px',
};

const calendario: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '1px',
  width: '100%',
  maxWidth: '590px',
  border: '1px solid #F7931E',
  marginTop: '-160px',
};

const diaContenedor: React.CSSProperties = {
  width: '100%',
  paddingTop: '85%',
  position: 'relative',
  border: '1px solid #F7931E',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  color: '#F7931E',
  fontWeight: 'bold',
};

const diaActualEstilo: React.CSSProperties = {
  backgroundColor: '#F7931E',
  color: 'white',
  borderRadius: '0%',
  fontWeight: 'bold',
};

const elementosDecorativos: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
};

const lineaIzquierda: React.CSSProperties = {
  position: 'absolute',
  top: '18%',
  left: '11%',
  width: '200px',
  height: 'auto',
};

const logo: React.CSSProperties = {
  position: 'absolute',
  top: '5%',
  right: '8%',
  width: '100px',
  height: 'auto',
};

const curvaDerecha: React.CSSProperties = {
  position: 'absolute',
  bottom: '0%',
  right: '6%',
  width: '170px',
  height: 'auto',
  objectFit: 'cover',
};

export default Calendario;
