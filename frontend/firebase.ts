// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC22BHLaYQWcOUAu8hmjzXE4ihdLjtio1I',
  authDomain: 'teacher-schedule-341115.firebaseapp.com',
  projectId: 'teacher-schedule-341115',
  storageBucket: 'teacher-schedule-341115.appspot.com',
  messagingSenderId: '677456275693',
  appId: '1:677456275693:web:c956532a5791a3bc5b04e4',
  measurementId: 'G-GE4XDT8PJ4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
const analytics = getAnalytics(app)
