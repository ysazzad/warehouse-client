// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA37WX90JrqLbjKTsHUxfq3fhR74EwhsZ4",
    authDomain: "warehouse-client-4595b.firebaseapp.com",
    projectId: "warehouse-client-4595b",
    storageBucket: "warehouse-client-4595b.appspot.com",
    messagingSenderId: "666279906237",
    appId: "1:666279906237:web:c5d0ea3535671206e660d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth