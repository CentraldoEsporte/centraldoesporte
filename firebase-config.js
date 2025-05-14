
// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyBIog2mazF01gHimZRoG67TZZNrr225l9k",
  authDomain: "centraldoesporte-2ed30.firebaseapp.com",
  projectId: "centraldoesporte-2ed30",
  storageBucket: "centraldoesporte-2ed30.firebasestorage.app",
  messagingSenderId: "914706628999",
  appId: "1:914706628999:web:ca1a08cb49de9f91c51322",
  measurementId: "G-JSX9DRG06B"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
