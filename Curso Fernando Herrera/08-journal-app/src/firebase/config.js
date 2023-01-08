// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAy0I9XHq3bvbkzH6FVLG0p_iTkO2XkTG4',
  authDomain: 'react-cursofh.firebaseapp.com',
  projectId: 'react-cursofh',
  storageBucket: 'react-cursofh.appspot.com',
  messagingSenderId: '541701009610',
  appId: '1:541701009610:web:d07c6fa8a657ee7a820433'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)

export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
