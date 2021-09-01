import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYUCs9YhmNfsa7fPlJY71L7TShYsLQZkQ",
    authDomain: "catch-of-the-day-kt-574f3.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-kt-574f3-default-rtdb.firebaseio.com",
    //projectId: "catch-of-the-day-kt-574f3",
    //storageBucket: "catch-of-the-day-kt-574f3.appspot.com",
    //messagingSenderId: "248748033690",
    //appId: "1:248748033690:web:6184170449d189ff91c123",
    //measurementId: "G-JGE6BB12HG"
  }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;