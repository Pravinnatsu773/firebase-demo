import './style.css';


import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyDoPK53Et07K0HSb29QZzUG4Q6eY-alJKw",
  authDomain: "webrtc-p2p-24fd6.firebaseapp.com",
  databaseURL: "https://webrtc-p2p-24fd6-default-rtdb.firebaseio.com",
  projectId: "webrtc-p2p-24fd6",
  storageBucket: "webrtc-p2p-24fd6.appspot.com",
  messagingSenderId: "690544703916",
  appId: "1:690544703916:web:36696638ef593c1af5e209",
  measurementId: "G-F7S57G3ZRE"
};


const app = initializeApp(firebaseConfig);

const auth  = getAuth();

let signUpEmailInput = document.getElementById('signUpEmailInput');
let signUpPasswordInput = document.getElementById('signUpPasswordInput');
let signUpButton = document.getElementById('signUpButton');

let signInEmailInput = document.getElementById('signInEmailInput');
let signInPasswordInput = document.getElementById('signInPasswordInput');
let signInButton = document.getElementById('signInButton');

if (signUpButton != null){

signUpButton.onclick = () => {
  const email = signUpEmailInput.value;
  const password = signUpPasswordInput.value;
  console.log(email,password)
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  console.log(user);
  console.log('User registration done!');
  document.getElementById('signInPageLink').click();
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  
});

}
}

if (signInButton != null){
  
signInButton.onclick = () => {
  const email = signInEmailInput.value;
  const password = signInPasswordInput.value;
  console.log(email,password)
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log('Done signing in!!');
    window.location.replace("/home.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}


}