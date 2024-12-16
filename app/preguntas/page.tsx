'use client';
import { useUserStore } from '@/store/store';
import Link from 'next/link';
import React, { FormEvent, useEffect, useState } from 'react';
import { obtenerPreguntas } from '@/data/preguntas';
import { calcularPorcentajeDiario, calcularProgreso } from '@/lib/calculos';
import { updateByEmail } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function Preguntas(){
    const [cigarrillos, setCigarrillos] = useState<number | string>(''); 
    const [preguntas, setPreguntas] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const user = useUserStore((state) => state);
    const router = useRouter();
    useEffect( ()=> {
        setPreguntas(obtenerPreguntas(user.data!.dias))
    }, [] )

    const handleCigarrillosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 0 || e.target.value === '') {
          setCigarrillos(e.target.value);
        }
      };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        const entries = Object.fromEntries(data)
        const values = Object.values(entries)
        if( values.every( value => value ) ){
          const diaActual = user.data!.dias
          const newData = {...user.data}
          if( diaActual == 0 ){
            newData.email = user.email
            newData.cantidadInicial = Number(entries.cantidad)
            newData.semanas = [Number(entries.cantidad),0,0,0]
            newData.fechas = [
              {
                fecha: new Date().toLocaleDateString(), 
                cantidad: Number(entries.cantidad), 
                porcentajeDiario: 100
              }
            ]
            newData.progreso = 0
            newData.dias = 1
            newData.respuestas = [Number(entries.pregunta_1), Number(entries.pregunta_2), Number(entries.pregunta_3)]
          }else if( diaActual >= 1 ){
            newData.dias = diaActual + 1
            newData.fechas!.push( {fecha: new Date().toLocaleDateString(), cantidad: Number(entries.cantidad), porcentajeDiario: calcularPorcentajeDiario(Number(entries.cantidad), newData.cantidadInicial)} )
            newData.progreso = calcularProgreso(newData.fechas)
            if( newData.semanas ) newData.semanas[Math.floor((newData.dias - 1)/7)] += Number(entries.cantidad)
            if( newData.respuestas )newData.respuestas.push(  Number(entries.pregunta_1), Number(entries.pregunta_2), Number(entries.pregunta_3) )
          }
          const update = await updateByEmail("users", user.email, newData)
          if( update ){
            user.updateData(newData)
            router.push("/calendario")
          }
        }else{
          setError( "Todos los campos son obligatorios" )
          setTimeout(()=> {
            setError( null )
          }, 3000)
        }
    }
 
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
      <form onSubmit={handleSubmit}>
        {preguntas.map(  (pregunta, index) => (
            <div key={index} style={styles.questionContainer}>
            <div style={styles.questionText}>
              {pregunta}
            </div>
            <div style={styles.options}>
              <div style={styles.option}>
                <label>
                  <input 
                    type="radio" 
                    name={`pregunta_${index + 1}`} 
                    value={1}
                    style={styles.radio} 
                  /> Si
                </label>
              </div>
              <div style={styles.option}>
                <label>
                  <input 
                    type="radio" 
                    name={`pregunta_${index + 1}`} 
                    value={0}
                    style={styles.radio} 
                  /> No
                </label>
              </div>
            </div>
          </div>
        ))}
     
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
          name='cantidad'
          min="0" // Esto también impide ingresar valores menores a 0
        />
      </div>
      { error && <p className='h-10 w-full bg-gray-50 text-red-500 flex justify-center items-center text-center font-semibold text-xl mt-5 rounded-lg'>{error}</p> }

      {/* Botón de enviar */}
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button} 
        >
          Enviar
        </button>
      </div>
      </form>
    </div>
    )
}

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


