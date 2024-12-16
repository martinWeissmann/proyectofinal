"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { addData, auth, getDataByEmail, provider, signInWithPopup } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, userDataDB, useUserStore } from "@/store/store";
import { UserCredential } from "firebase/auth";


export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const loginStore = useUserStore((state) => state.login);
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const user: UserCredential = await signInWithPopup(auth, provider);
      const userData : User = {
        fullName: user.user.displayName || "",
        photoURL: user.user.photoURL || "",
        email: user.user.email || "",
        data: {
          email: "",
          semanas: [0,0,0,0],
          nombre: user.user.displayName || "",
          progreso: 0,
          cantidadInicial: 0,
          fechas: [],
          dias: 0,
          respuestas: []
      }
      }
      const userInDB = await getDataByEmail("users", user.user.email || "")
      if( !userInDB ){
        addData( "users",  {
          email: user.user.email,
          nombre: user.user.displayName || "",
          semanas: [0,0,0,0],
          progreso: 0,
          cantidadInicial: 0,
          fechas: [],
          dias: 0,
          respuestas: []
      } )
      }else{
        userData.data = userInDB 
      }
      loginStore(userData)
      router.push("/");
     
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Bienvenido a QuitSmoking</CardTitle>
          <CardDescription>Inicia sesión para seguir tu progreso</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Iniciando sesión..." : "Continuar con Google"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
