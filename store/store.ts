import { create } from "zustand";
export interface User{
    fullName: string,
    photoURL: string,
    email: string,
    data : userDataDB
}

export interface userDataDB {
    email: string,
    semanas: number[],
    progreso: number,
    cantidadInicial: number,
    fechas: { fecha: string, cantidad: number, porcentajeDiario: number }[],
    dias: number,
    nombre: string,
    respuestas: number[]
}

interface UserState extends User {
    login: (user: User) => void;
    logout: () => void;
    updateData: (data: userDataDB) => void
}

const initialState: User = {
    fullName: "",
    photoURL: "",
    email: "",
    data: {
        nombre: "",
        email: "",
        semanas: [0,0,0,0],
        progreso: 0,
        cantidadInicial: 0,
        fechas: [],
        dias: 0,
        respuestas: []
    }
};

export const useUserStore = create<UserState>((set) => ({
    ...initialState,
    login: (user: User) => {
        set({ ...user })
    },
    logout: () => {
        set(initialState)
    },
    updateData: (data: userDataDB) => {
        set({ data })
    }
}));

