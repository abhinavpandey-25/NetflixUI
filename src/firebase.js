import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA5076201FTCJjNcSM8f3CDN-uu52SyQW4",
    authDomain: "netflix-clone-b339e.firebaseapp.com",
    projectId: "netflix-clone-b339e",
    storageBucket: "netflix-clone-b339e.appspot.com",
    messagingSenderId: "905785707172",
    appId: "1:905785707172:web:fec47c3999247a5b787431"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore()
  const auth=firebase.auth();
  export{auth}
  export default db;