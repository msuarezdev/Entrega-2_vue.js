/*import firebase from 'firebase/app'

require("firebase/auth"); 
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

const firebaseConfig = {
    apiKey: "AIzaSyBpPpn98IZnsqm4Uny1sAdCAlqohuqoezU",
    authDomain: "foodapp-vue.firebaseapp.com",
    projectId: "foodapp-vue",
    storageBucket: "foodapp-vue.appspot.com",
    messagingSenderId: "983676062344",
    appId: "1:983676062344:web:8cd00a7da76632bc43ad3d",
    measurementId: "G-36R9TVTK5Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firabase.storage()
const functions = firebase.functions()

export {
    app,
    firebase,
    auth,
    db,
    storage,
    functions
}

va debajo entre las llaves del if en register (hay que importar firebase antes)  
/*firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
              this.name = ''
              this.email= ''
              this.password= ''
              console.log(user)
            }).catch(err => {
              this.error = err.message
            })*/


