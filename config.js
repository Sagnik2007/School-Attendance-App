import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBGCc4ozYiwwO38BnhplY35L89FPIwM_fY",
  authDomain: "school-attendence-app-df8da.firebaseapp.com",
  databaseURL: "https://school-attendence-app-df8da-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-df8da",
  storageBucket: "school-attendence-app-df8da.appspot.com",
  messagingSenderId: "42482183566",
  appId: "1:42482183566:web:02123eaddcee22078b48df"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();