import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Vue from 'vue'
import firebaseConfig from './firebase'

Vue.use(firestorePlugin)
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()