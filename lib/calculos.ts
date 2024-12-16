export const calcularProgreso = ( fechas: { fecha: string, cantidad: number, porcentajeDiario: number }[] = [] ) => {
    if( fechas.length == 0 ) return 0;
    let acumulado = fechas.reduce((total, fecha) => total + fecha.porcentajeDiario, 0) - 100;
    let promedio = acumulado / (fechas.length - 1);
    return promedio;
}

export const calcularPorcentajeDiario = ( cantidad: number, cantidadInicial: number = 0 ) => {
    return (cantidadInicial - cantidad) / ( cantidadInicial / 100 );
}

