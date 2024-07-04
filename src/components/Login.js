import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { validateFormDate } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import {auth} from "../utils/firebase"
import {BG_URL} from '../utils/constant'
const Login = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const handleButtonClick=()=>{
        //validate form data
        const message=validateFormDate(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message)return;
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value,
                })
                  .then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                      })
                    );

                  })
                  .catch((error) => {
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode)
            });

        }else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                // navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode)
            });
        }
    }

    const toggleSignForm=()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className="absolute inset-0">
          <img 
              className="w-full h-full object-cover" 
              src={BG_URL} 
              alt="Background" 
          />
      </div>
        <form
        onSubmit={(e)=>e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
         ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login