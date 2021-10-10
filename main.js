import './style.css';


import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const firebaseConfig = {
  
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