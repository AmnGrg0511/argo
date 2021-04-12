import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDCu2LRR0-IHQUxaINC3yhJc5JICHFQtO8",
    authDomain: "argo-85fb6.firebaseapp.com",
    projectId: "argo-85fb6",
    storageBucket: "argo-85fb6.appspot.com",
    messagingSenderId: "1062368654302",
    appId: "1:1062368654302:web:ed0bbbe701d25ecc1fa34f",
    measurementId: "G-C90DDNMQ9C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();
export default firebase; 
export const db = firebase.firestore();
export const auth = firebase.auth();
export const FieldValue = firebase.firestore.FieldValue;
export const storage = firebase.storage();