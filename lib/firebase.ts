"use client";
import { initializeApp, getApps } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  signOut, 
  applyActionCode, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  confirmPasswordReset 
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getFirestore, collection, getDocs, addDoc, query, where, updateDoc, } from "firebase/firestore"; 
import { userDataDB } from "@/store/store";
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase only if it hasn't been initialized already
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

type Data = {
  progreso: number
  nombre : string
}

 const getData = async ( nameCollection:string ) => {
    try {
      const querySnapshot = await getDocs(collection(db, nameCollection));
      const aux:Data[] = []
      querySnapshot.forEach((doc) => {
        aux.push( {progreso: doc.data().progreso, nombre: doc.data().nombre} )
      });
      return aux
    } catch (error) {
      return []
    }
  }

  const getDataByEmail = async (nameCollection: string, email: string): Promise<userDataDB | false> => {
    try {
      const q = query(collection(db, nameCollection), where("email", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // Asumiendo que solo hay un documento con ese email
        const docSnap = querySnapshot.docs[0]; 
        return docSnap.data() as userDataDB;
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  };

  const addData = async ( nameCollection:string, data:any ) => {
    try {
      const docRef = await addDoc(collection(db, nameCollection), data);
      return true
    } catch (e) {
      return false
    }
  }

  const updateByEmail = async (nameCollection: string, email: string, newData: object) => {
    try {
      const q = query(collection(db, nameCollection), where("email", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref; 
  
        await updateDoc(docRef, newData);
        return true
  
      } else {
        return false
      }
  
    } catch (error) {
      return false
    }
  };

export {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  db,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  applyActionCode,
  storage,
  functions,
  getData,
  addData,
  getDataByEmail,
  updateByEmail,
};