
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import toast from "react-hot-toast"

const firebaseConfig = {
  apiKey: "AIzaSyAxEUdV0p5kkvu60qtTBR5-GbpL6r9RNvk",
  authDomain: "kodluyoruz--final-project.firebaseapp.com",
  projectId: "kodluyoruz--final-project",
  storageBucket: "kodluyoruz--final-project.appspot.com",
  messagingSenderId: "1081165479582",
  appId: "1:1081165479582:web:32e9d681c4fe613198458f",
  measurementId: "G-4VWXGKRK6Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const register = async (email,password) =>{
    try{
        const {user} = await createUserWithEmailAndPassword(auth,email,password)
    return user
    }catch(error){
        toast.error(error.message);
    }}

export const login =  async (email,password)=>{
    try{
        const {user} =  await signInWithEmailAndPassword (auth,email,password)
        return user
    }catch(error){
        toast.error(error.message);
    }}

export const sıgnout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    toast.error(error.message);
  }
};

export default app
