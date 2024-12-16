import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function helperData(){
  return {
          nombre: "Nicolas Cirulli",
          email: "nicolascirulli2@gmail.com",
          semanas: [113,79,12,0],
          progreso: 34.285714285714285,
          cantidadInicial: 20,
          fechas: [
            {fecha: "12/2/2024", cantidad: 20, porcentajeDiario: 100},
            {fecha: "12/3/2024", cantidad: 18, porcentajeDiario: 10},
            {fecha: "12/4/2024", cantidad: 16, porcentajeDiario: 20},
            {fecha: "12/5/2024", cantidad: 15, porcentajeDiario: 25},
            {fecha: "12/6/2024", cantidad: 15, porcentajeDiario: 25},
            {fecha: "12/7/2024", cantidad: 14, porcentajeDiario: 30},
            {fecha: "12/8/2024", cantidad: 15, porcentajeDiario: 25},
            {fecha: "12/9/2024", cantidad: 13, porcentajeDiario: 35},
            {fecha: "12/10/2024", cantidad: 12, porcentajeDiario: 40},
            {fecha: "12/11/2024", cantidad: 10, porcentajeDiario: 50},
            {fecha: "12/12/2024", cantidad: 9, porcentajeDiario: 55},
            {fecha: "12/13/2024", cantidad: 10, porcentajeDiario: 50},
            {fecha: "12/14/2024", cantidad: 15, porcentajeDiario: 25},
            {fecha: "12/15/2024", cantidad: 10, porcentajeDiario: 50},
            {fecha: "12/16/2024", cantidad: 12, porcentajeDiario: 40},
          ],
          dias: 15,
          respuestas: [ 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0 ]
    }
}