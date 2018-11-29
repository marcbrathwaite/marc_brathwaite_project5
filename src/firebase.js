import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBoiyoNVJCF58hLot5yuAKszh5MQ8s7Ats",
    authDomain: "hy-project5-6034a.firebaseapp.com",
    databaseURL: "https://hy-project5-6034a.firebaseio.com",
    projectId: "hy-project5-6034a",
    storageBucket: "",
    messagingSenderId: "1056749712833"
};
firebase.initializeApp(config);

export default firebase;