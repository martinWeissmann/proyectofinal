'use client'; // Añade esta línea para convertirlo en un Client Component


import LogoButton from '@/components/ui/LogoButton';
import Link from 'next/link';
import React from 'react';

const DoctorProfile: React.FC = () => {
  const doctors = [
    {
      name: 'Dr. Martín Masdeu',
      phone: '011 15-5094-2107',
      image: '/martin.png', // Coloca la URL de la imagen
      doctoraliaUrl:
        'https://www.doctoraliar.com/martin-masdeu/neumonologo/capital-federal#profile-pricing',
    },
    {
      name: 'Dr. Hernan Vasilo Vigil',
      phone: '011 2390-6220',
      image: '/hernan.png', // Coloca la URL de la imagen
      doctoraliaUrl:
        'https://www.doctoraliar.com/hernan-basilo-vigil/neumonologo/capital-federal#address-id=136005&is-online-only=false&filters%5Bspecializations%5D%5B%5D=44',
    },
   
  ];


  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Flecha de regreso */}
     <Link href={"/"}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '44px',
          color: '#f49034',
          background: 'none', // Sin fondo
          border: 'none', // Sin borde
          padding: 0, // Sin padding
        }}
      
      >
        ←
      </Link>

      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Conoce a nuestros médicos profesionales
      </h1>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        En QS sabemos que el proceso de dejar de fumar es complicado y que puede
        llegar a requerir de ayuda médica profesional, por lo que dejamos el
        contacto de los mejores neumonólogos que hay.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', justifyContent: 'center' }}>

      
      {doctors.map((doctor, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            minWidth: '320px',
            maxWidth: '400px',
          }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              marginBottom: '15px',
              border: '2px solid orange',
            }}
          />
          <div>
            <h2 style={{ fontSize: '18px', margin: '0' }}>{doctor.name}</h2>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              Contacto:{' '}
              <a href={`tel:${doctor.phone}`} style={{ color: '#007bff' }}>
                {doctor.phone}
              </a>
            </p>
            <p style={{ margin: '5px 0', fontSize: '14px' }}>
              Página con información:{' '}
              <a
                href={doctor.doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff' }}
              >
                Doctoralia
              </a>
            </p>
          </div>
        </div>
      ))}
      </div>
      <LogoButton positions={{ bottom: '50px', left: '50px' }} />
    </div>
  );
};

export default DoctorProfile;
