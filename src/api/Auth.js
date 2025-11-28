// src/Auth.js
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

// Sign up user
export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Success alert
    Swal.fire({
      icon: 'success',
      title: 'Signup Successful!',
      text: `Welcome ${userCredential.user.email}`,
      confirmButtonColor: '#3085d6',
    });

    return userCredential.user;
  } catch (error) {
    // Error alert
    Swal.fire({
      icon: 'error',
      title: 'Signup Failed',
      text: error.message,
      confirmButtonColor: '#d33',
    });
  }
};

// Login user
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Success alert
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: `Welcome back ${userCredential.user.email}`,
      confirmButtonColor: '#3085d6',
    });

    return userCredential.user;
  } catch (error) {
    // Error alert
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.message,
      confirmButtonColor: '#d33',
    });
     throw error; // propagate error
  }
};
