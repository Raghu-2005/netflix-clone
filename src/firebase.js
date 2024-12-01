import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCA2lna37cYLBUjx33d0zGCTFS9bWcJkDI",
  authDomain: "netflix-clone-70c22.firebaseapp.com",
  projectId: "netflix-clone-70c22",
  storageBucket: "netflix-clone-70c22.firebasestorage.app",
  messagingSenderId: "959924305882",
  appId: "1:959924305882:web:afde83e43914bf3f760ae3"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup = async(name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};