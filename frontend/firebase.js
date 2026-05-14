// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from 'firebase/auth' 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "web-ai-9d445.firebaseapp.com",
//   projectId: "web-ai-9d445",
//   storageBucket: "web-ai-9d445.firebasestorage.app",
//   messagingSenderId: "717818935881",
//   appId: "1:717818935881:web:eb5f3476c6f05cf2a59d98",
//   measurementId: "G-ZTE3QFT8GJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app)
// const provider = new GoogleAuthProvider()

// export{auth,provider}




import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'  // ✅ added GoogleAuthProvider

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web-ai-9d445.firebaseapp.com",
  projectId: "web-ai-9d445",
  storageBucket: "web-ai-9d445.firebasestorage.app",
  messagingSenderId: "717818935881",
  appId: "1:717818935881:web:eb5f3476c6f05cf2a59d98",
  measurementId: "G-ZTE3QFT8GJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()