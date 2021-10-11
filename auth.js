
import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const firebaseConfig = {

    apiKey: "AIzaSyCoO9YcKZJdEpkMsfa51XBqbJz6eMAVW8A",
  
    authDomain: "be-project-94a2e.firebaseapp.com",
  
    databaseURL: "https://be-project-94a2e-default-rtdb.firebaseio.com",
  
    projectId: "be-project-94a2e",
  
    storageBucket: "be-project-94a2e.appspot.com",
  
    messagingSenderId: "504096098693",
  
    appId: "1:504096098693:web:32f6444cbdaf25284e1cec",
  
    measurementId: "G-CKMJ10QJD5"
  
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
  window.location.replace('/preference.html')

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