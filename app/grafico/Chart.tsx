'use client';
import React, { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import LogoButton from '@/components/ui/LogoButton';
import { useUserStore } from '@/store/store';
import Link from 'next/link';

Chart.register(BarElement, CategoryScale, LinearScale, BarController);

const MyChart = () => {
  const user = useUserStore((state) => state);
  const chartRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));

  const datos = user.data?.email ? user.data?.semanas : [50, 30, 20, 10]

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
          {
            data: datos,
            backgroundColor: 'rgba(220, 220, 220, 0.8)',
            borderColor: 'rgba(220, 220, 220, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50,
          },
        },
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              color: 'orange',
            },
            ticks: {
              color: '#000',
              font: {
                size: 22,
                weight: 'bold',
              },
            },
            border: {
              color: 'orange',
              width: 5,
            },
            title: {
              display: true,
              text: 'Semana especificada desde el comienzo del proceso',
              color: '#000',
              align: 'center',
              font: {
                size: 16,
                weight: 'bold'
              }
            }
            },
            y: {
              title: {
                display: true,
                text: 'Cigarrillos fumados por semana',
                color: '#000',
                align: 'center',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              },
              grid: {
                drawOnChartArea: false,
                drawTicks: true,
                color: 'orange',
                tickLength: 20,

              },
              ticks: {
                color: '#000',
                stepSize: 5,
                padding: 10,
                font: {
                  size: 16,
                  weight: 'bold',
                },
              },
              border: {
                color: 'orange', // Línea del eje Y
                width: 5,
              },
            },
          },
          plugins: {
            legend: {
              display: true
            },
          },
        },
      });


    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className='px-20 w-full min-h-screen flex flex-col items-center justify-center gap-5'>
      <Link style={flechaRegreso} href={"/"}>
        ←
      </Link>
      <h1 className='text-2xl font-bold'>Seguimiento de cantidades semanales</h1>
      <canvas className='max-w-[1200px] max-h-[600px]' ref={chartRef} />
      <LogoButton positions={{ bottom: "20px", left: "20px" }} />
    </div>
  )
};

export default MyChart;

const flechaRegreso: React.CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  top: '20px',
  left: '20px',
  fontSize: '44px',
  color: '#F7931E',
};