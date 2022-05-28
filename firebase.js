import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDgSrLgzFlnOkEq37wt-LfWMjCrrv6gM48',
  authDomain: 'itec-2022.firebaseapp.com',
  projectId: 'itec-2022',
  storageBucket: 'itec-2022.appspot.com',
  messagingSenderId: '191979227704',
  appId: '1:191979227704:web:9250a6726678056f7a74cd',
  measurementId: 'G-JPK2D30J15',
};
const firebaseApp = require('firebase/app').default;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
