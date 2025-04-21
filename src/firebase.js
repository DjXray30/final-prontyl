// filepath: c:\Users\Nihar\Documents\GitHub\final-prontyl\src\firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcuzJZBwFDbe9hWymPiDVdHsWSc_baUzI',
  authDomain: 'prontyl.firebaseapp.com',
  projectId: 'prontyl',
  storageBucket: 'prontyl.appspot.com',
  messagingSenderId: '738653307043',
  appId: '1:738653307043:web:95abce52e94dc1e02abf16',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };