import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Vue from 'vue'
import firebaseConfig from './firebase'

Vue.use(firestorePlugin)
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();
export const auth = firebase.auth();

// fetch method to get current user from firebase. We use it in router.js
auth.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};