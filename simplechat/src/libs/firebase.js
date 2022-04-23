import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCUMlnPdLOmUJyXSSbd7GgF9Utjkv7JR58",
    authDomain: "simple-chat-3a360.firebaseapp.com",
    projectId: "simple-chat-3a360",
    storageBucket: "simple-chat-3a360.appspot.com",
    messagingSenderId: "353421685567",
    appId: "1:353421685567:web:4e77bc4a474113cef5198a",
    measurementId: "G-51H00M1R10"
  };

// google sign In: project-353421685567 /simple-chat-sign-in
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
